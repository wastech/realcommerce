export default function Footer() {
  const data = [
    {
      id: 1,
      title: "CUSTOMER SERVICE",
      list1: "Help & Contact Us",
      list2: "Returns & Refunds",
      list3: "Online Stores",
      list4: "Terms & Conditions",
    },

    {
      id: 2,
      title: "COMPANY",
      list1: "What We Do",
      list2: "Available Services",
      list3: "Latest Posts",
      list4: "FAQs",
    },

    {
      id: 3,
      title: "SOCIAL MEDIA",
      list1: "Twitter",
      list2: "Instagram",
      list3: "Tumblr",
      list4: "Pinterest",
    },

    {
      id: 4,
      title: "PROFILE",
      list1: "My Account",
      list2: "Checkout",
      list3: "Order Tracking",
      list4: "Help & Support",
    },
  ];
  return (
    <section className=" border-top-1 surface-border">
      <div className="grid w-full md:w-11 m-auto  pb-8">
        {data.map((item) => (
          <div className="col-6 sm:col-12 md:col-6 lg:col-3 pt-6" key={item.id}>
            <ul class="list-none p-0 ">
              <li className="text-sm font-semibold mb-4">{item.title}</li>
              <li className="text-xs mb-2">{item.list1}</li>
              <li className="text-xs mb-2">{item.list2}</li>
              <li className="text-xs mb-2"> {item.list3}</li>
              <li className="text-xs ">{item.list4}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
