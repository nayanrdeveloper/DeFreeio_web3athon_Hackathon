import {
  footerCol1Items,
  footerCol2Items,
  footerCol3Items,
  footerPrivacyItems,
  socialMediaItems,
} from "@/constants";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import FooterCol4 from "./FooterCol4";
import FooterColItem from "./FooterColItem";
import FooterPrivacyItem from "./FooterPrivacyItem";
import FooterSocialItem from "./FooterSocialItem";

function Footer() {
  return (
    <footer>
      <div className="bg-primary-black px-5 py-4">
        <div className="flex justify-between items-center">
          <ul className="flex space-x-5">
            {footerPrivacyItems.map((footerItem) => {
              return (
                <FooterPrivacyItem
                  key={footerItem.id}
                  id={footerItem.id}
                  name={footerItem.name}
                  route={footerItem.route}
                />
              );
            })}
          </ul>
          <ul className="flex space-x-5 items-center">
            <li>
              <Link href={"/"} className="text-white font-medium">
                Follow Us
              </Link>
            </li>
            {socialMediaItems.map((socialMediaItem) => {
              return (
                <FooterSocialItem
                  key={socialMediaItem.id}
                  name={socialMediaItem.name}
                  id={socialMediaItem.id}
                  icon={socialMediaItem.icon}
                  route={socialMediaItem.route}
                />
              );
            })}
          </ul>
        </div>
        {/* Footer Cols */}
        <div className="grid grid-cols-4 mt-8 border-t border-muted pt-5">
          <div>
            <FooterColItem
              id={footerCol1Items.id}
              header={footerCol1Items.header}
              footerItems={footerCol1Items.footerItems}
            />
          </div>
          <div>
            <FooterColItem
              id={footerCol2Items.id}
              footerItems={footerCol2Items.footerItems}
              header={footerCol2Items.header}
              key={footerCol2Items.id}
            />
          </div>
          <div>
            <FooterColItem
              id={footerCol3Items.id}
              footerItems={footerCol3Items.footerItems}
              header={footerCol3Items.header}
              key={footerCol3Items.id}
            />
          </div>
          <div>
            <FooterCol4 />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
