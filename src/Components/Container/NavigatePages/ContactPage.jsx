import React, { useEffect } from "react";
import Contacts from "../../pages/Contacts";
import MainBanner from "./MainBanner";

const ContactPage = () => {
  const title = document.querySelector("#page_title");
  useEffect(() => {
    title.textContent = "Tian | Contact";
  }, [title]);
  return (
    <>
      <MainBanner title={"Contact"} />
      <Contacts />
    </>
  );
};

export default ContactPage;
