"use client";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { HiOutlineMapPin, HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 lg:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col items-center lg:justify-center lg:overflow-hiddden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll lg:overflow-y-visible">
        <div>
          <div className="flex flex-col lg:flex-row gap-6">
            <div>Info Text</div>
            <div className="flex-1">
              <form>
                <div className="flex flex-col lg:flex-rwo gap-6">
                  <div className="w-full">
                    <Label htmlfor="name">
                      Firstname <span className="text-accent">*</span>
                      <Input
                        id="firstname"
                        name="firstname"
                        placeholder="First Name"
                        required
                      />
                    </Label>
                  </div>
                  <div className="w-full">
                    <Label htmlfor="name">
                      Lastname <span className="text-accent">*</span>
                      <Input
                        id="lastname"
                        name="lastname"
                        placeholder="last Name"
                        required
                      />
                    </Label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
