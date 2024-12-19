/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="min-h-screen w-screen bg-[#990000] text-white flex flex-col items-center pt-6 gap-6 "
      >
        <h1 className="w-[50%] text-center text-4xl font-bold ">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <Accordion type="single" collapsible className="w-[50%] font-mono ">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold">
              How do I log my workouts?{" "}
            </AccordionTrigger>
            <AccordionContent>
              You can easily log your workouts by selecting the exercise,
              entering the duration, and tracking your reps.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold">
              {" "}
              Can I track my calories burned?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can track calories burned through the application's
              integrated tracking features.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold">
              Is this application suitable for beginners?{" "}
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! GymFluencer is designed to be user-friendly and
              suitable for all fitness levels.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-semibold">
              What features does the application offer?
            </AccordionTrigger>
            <AccordionContent>
              The app offers workout logging, rep counting, calorie tracking,
              and progress reviews.
            </AccordionContent>
          </AccordionItem>{" "}
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-semibold">
              How can I reset my password?
            </AccordionTrigger>
            <AccordionContent>
              You can reset your password by going to the login screen and
              selecting 'Forgot Password.'
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
