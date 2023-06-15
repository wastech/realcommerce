import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex align-items-center justify-content-center">
      <div className="surface-card p-4 shadow-1 border-round w-full lg:w-5">
        <div className="text-center mb-5">
          <img
            src="https://e7.pngegg.com/pngimages/348/800/png-clipart-man-wearing-blue-shirt-illustration-computer-icons-avatar-user-login-avatar-blue-child.png"
            alt="Login avatar"
            height={50}
            className="mb-3"
          />
          <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
          <span className="text-600 font-medium line-height-3">
            Don't have an account?
          </span>
          <Link className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">
            Create today!
          </Link>
        </div>

        <div>
          <label htmlFor="email" className="block text-900 font-medium mb-2">
            Fullname
          </label>
          <InputText
            id="text"
            type="text"
            placeholder="Enter Your Full Name"
            className="w-full mb-3"
          />

          <label htmlFor="email" className="block text-900 font-medium mb-2">
            Email
          </label>
          <InputText
            id="email"
            type="text"
            placeholder="Email address"
            className="w-full mb-3"
          />

          <label htmlFor="password" className="block text-900 font-medium mb-2">
            Password
          </label>
          <InputText
            id="password"
            type="password"
            placeholder="Password"
            className="w-full mb-3"
          />

          <Button label="Sign Up" icon="pi pi-user" className="w-full" />
        </div>
      </div>
    </div>
  );
}
