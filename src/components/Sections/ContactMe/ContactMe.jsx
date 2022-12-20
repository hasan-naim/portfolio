import React from "react";
import HeadLine from "../../HeadLine/HeadLine";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import { BiSend } from "react-icons/bi";

function ContactMe() {
  return (
    <section id="contactMe" className="mb-24">
      <div className="container">
        <HeadLine text={"Contact Me"} />
        <div>
          <form className="text-gray-100 max-w-[700px] mx-auto" action="">
            <div class="mb-6">
              <label
                for="default-input"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-100"
              >
                Name
              </label>
              <input
                type="text"
                id="default-input"
                placeholder="Your Name"
                class="bg-gray-50 border border-gray-300 text-lg text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primaryDark-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 focus:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              />
            </div>
            <div class="mb-6">
              <label
                for="default-input"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-100"
              >
                Email
              </label>
              <input
                type="text"
                id="default-input"
                placeholder="Your Email"
                class="bg-gray-50 border border-gray-300 text-lg text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-primaryDark-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-300 focus:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              />
            </div>
            <div class="mb-6">
              <label
                for="default-input"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-100"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-primaryDark-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
                placeholder="Write your thoughts here..."
              ></textarea>
            </div>
            <div className="w-fit mx-auto">
              <PrimaryButton
                text={
                  <span className="flex gap-2 items-center font-medium">
                    <span>Send</span>
                    <BiSend className="font-medium w-6 h-6" />
                  </span>
                }
                styles="rounded-[38px] py-2 mx-auto w-fit"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
