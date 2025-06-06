import { Button } from "@/components/ui/button"
import { ProductPortalContext } from "@/context/ProductPortalContext";
import { useContext, useEffect } from "react";
import ReactDOM from 'react-dom';
import { AiOutlineClose } from "react-icons/ai";
import { ProcuctAddCardButton} from "@/components/buttons/ProductCartButons"

const ProductCardPortal = () => {
  const {
    isProductPortalOpen,
    setIsProductPortalOpen,
    selectedImage,
  } = useContext(ProductPortalContext)
  
  useEffect(() => {
    setIsProductPortalOpen(true)
    // console.log("isProductPortalOpen from the useEffect", isProductPortalOpen)
    // console.log("selectedImage from the useEffect", (selectedImage.name && selectedImage.src && selectedImage._id) == ""  )
  }, [])

  const {title, image_url, _id, description, price, category} = selectedImage

  const isSelectedImageEmpty = (title && image_url && _id) == ""

  if (isSelectedImageEmpty || !isProductPortalOpen ) return null
  return ReactDOM.createPortal(
    <div id={_id} className={`fixed portal-product w-full h-dvh top-0 left-0 z-100 flex items-center`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}>
      <div className="w-full max-w-md mx-auto bg-white">
        {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-gray-950"></div>  */}
        <div className="flex justify-end p-2">
          <Button onClick={() => setIsProductPortalOpen((prev) => !prev)} variant="ghost" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <AiOutlineClose />
          </Button>
        </div>
        <img
          src={image_url}
          alt="Product Image"
          width={600}
          height={400}
          className="w-full h-64 object-cover"
          style={{ aspectRatio: "600/400", objectFit: "cover" }}
        />
        <div id={_id} className="p-4 space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">${price}</span>
            
            <span className="text-gray-500 dark:text-gray-400">Category: {category}</span> 
            <ProcuctAddCardButton classes={""} />
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default ProductCardPortal