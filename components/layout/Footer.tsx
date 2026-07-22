"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";


interface Props {
  onEnquire: () => void;
}

export default function Footer({ onEnquire }: Props) {
  return (
    <footer className="bg-white py-6">
      <Container className="mx-2">

        {/* Top */}
        <div className="flex flex-col gap-3 lg:gap-10 lg:flex-row lg:items-start lg:justify-between">

          {/* Left */}
          <div>
            <img
              src="/logo.webp"
              alt="Accredian"
              className="h-10"
            />

            <div className="mt-4 flex gap-5 text-xl text-gray-700">
              <a href="https://www.linkedin.com/company/your-company" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="cursor-pointer transition hover:text-[#287ae3]" />
              </a>

              <a href="https://twitter.com/your-account" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="cursor-pointer transition hover:text-[#287ae3]" />
              </a>

              <a href="https://www.instagram.com/your-account" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer transition hover:text-[#287ae3]" />
              </a>

              <a href="https://www.youtube.com/@your-channel" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="cursor-pointer transition hover:text-[#287ae3]" />
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="text-left lg:text-right">
            <Button onClick={onEnquire} className="mt-6 w-full sm:w-fit">
              Enquire Now
            </Button>

            <p className="text-sm text-gray-800">
              Speak with our Advisor
            </p>
          </div>

        </div>

        <hr className="my-0 border-gray-300" />

        {/* Middle */}
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-2">

          {/* Links */}
          <div>
            <h3 className="mt-2 text-xl font-bold">
              Accredian
            </h3>

            <ul className="mt-2 space-y-2 text-base text-gray-700">
              <li>
                <Link className="hover:text-[#287ae3]" href="#">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#287ae3]" href="#">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#287ae3]" href="#">
                  Why Accredian
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mt-2 text-xl font-bold">
              Contact Us
            </h3>

            <p className="mt-2 text-base">
              Email us:{" "}
              <a
                href="mailto:enterprise@accredian.com"
                className="text-[#287ae3] hover:text-[#0b65da]"
              >
                enterprise@accredian.com
              </a>
            </p>

            <p className="mt-2 max-w-xl text-base leading-6 text-gray-700">
              Office Address: 4th Floor, 250, Phase IV,
              Udyog Vihar, Sector 18,
              Gurugram, Haryana
            </p>
          </div>

        </div>

        <hr className="my-5 border-gray-300" />

        {/* Bottom */}
        <p className="text-center text-base text-gray-900">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </p>

      </Container>
    </footer>
  );
}