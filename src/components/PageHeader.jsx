import LogoutButton from "./Auth/Logout";

export default function PageHeader({ title }) {
  return (
    <div className="relative flex justify-end items-center mb-20">
      
      <h1 className="page-title !mb-0 absolute inset-x-0 text-center pointer-events-none">
          {title}
      </h1>
      
      <div className="z-10"> 
          <LogoutButton />
      </div>
    </div>
  );
}