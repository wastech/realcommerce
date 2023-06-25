import '../App.css'

export default function SideBar() {
  return (
    <>
      <div className="card  ">
        <ul class="list-none">
          <li>
            <p className="font-medium text-sm">Home </p>
            <ul class="list-none pl-3">
              <li className="hover:font-bold text-xs">
                <i className="pi pi-home mr-2 "></i> Dashboard
              </li>
            </ul>
          </li>

          <li className="mt-2">
            <p className="font-medium text-sm">Category </p>
            <ul class="list-none pl-3">
              <li className="hover:font-bold text-xs">
                <i className="pi pi-home mr-2 "></i> Categories
              </li>
            </ul>
          </li>

          <li className="mt-2">
            <p className="font-medium text-sm">Product </p>
            <ul class="list-none pl-3">
              <li className="hover:font-bold text-xs mb-2">
                <i className="pi pi-home mr-2 "></i> Add Product
              </li>

              <li className="hover:font-bold text-xs">
                <i className="pi pi-home mr-2 "></i> Products
              </li>
            </ul>
          </li>

          <li className="mt-2">
            <p className="font-medium text-sm">Customer </p>
            <ul class="list-none pl-3">
              <li className="hover:font-bold text-xs">
                <i className="pi pi-home mr-2 "></i> Customers
              </li>
            </ul>
          </li>

          <li className="mt-2">
            <p className="font-medium text-sm">Order </p>
            <ul class="list-none pl-3">
              <li className="hover:font-bold text-xs">
                <i className="pi pi-home mr-2 "></i> Orders
              </li>
            </ul>
          </li>
        </ul>

        <div className="avatar-container">
        <img src="avatar.png" alt="Avatar" className="avatar" />
      </div>
      </div>
    </>
  );
}
