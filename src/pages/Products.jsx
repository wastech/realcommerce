import React from "react";
import { Toolbar } from "primereact/toolbar";
import { SplitButton } from "primereact/splitbutton";

const items = [
  {
    label: "Update",
    icon: "pi pi-refresh",
  },
  {
    label: "Delete",
    icon: "pi pi-times",
  },
  {
    label: "React Website",
    icon: "pi pi-external-link",
    command: () => {
      window.location.href = "https://reactjs.org/";
    },
  },
  {
    label: "Upload",
    icon: "pi pi-upload",
    command: () => {
      //router.push('/fileupload');
    },
  },
];

export default function Products() {
  const startContent = (
    <React.Fragment>
      <SplitButton
        label="Category"
        icon="pi pi-plus"
        className="mr-2"
        model={items}
        size="small"
        severity="secondary"
        rounded
        outlined
      />

      <SplitButton
        label="size"
        icon="pi pi-plus"
        className="mr-2"
        model={items}
        size="small"
        severity="secondary"
        rounded
        outlined
      ></SplitButton>

      <SplitButton
        label="Category"
        icon="pi pi-plus"
        className="mr-2"
        model={items}
        size="small"
        severity="secondary"
        rounded
        outlined
      ></SplitButton>
    </React.Fragment>
  );

  const endContent = (
    <React.Fragment>
      <SplitButton
        label="Sort Order"
        icon="pi pi-plus"
        className="mr-2 text-sm"
        model={items}
        size="small"
        severity="secondary"
        rounded
        outlined
      />
    </React.Fragment>
  );

  return (
    <section className="w-11 m-auto">
      <div className="header_text border-bottom-1 surface-border">
        <h2 className="text-3xl">Man collection</h2>
        <p className="w-12 pb-2 md:w-6 text-md">
          We not only help you design exceptional products, but also make it
          easy for you to share your designs with more like-minded people.
        </p>
      </div>

      <section className="sub_nav_section mt-3 mb-2">
        <Toolbar start={startContent} end={endContent} />
      </section>
      <div className="cl-2"></div>

      <div className="cl-10"></div>
    </section>
  );
}
