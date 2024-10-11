import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";

const FooterContact = () => {
  return (
    <div className="footer-widget footer-contact p-4 sm:p-6 bg-black text-white">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">

        <div className="footer-address flex flex-col items-center sm:flex-row sm:items-start text-center sm:text-left">
          <span className="text-blue-400  mb-2 sm:mb-0 sm:mr-4 border border-blue-700 rounded-full px-2 py-1 hover:text-white hover:bg-blue-700">
            <PhoneOutlined />
          </span>
          <div className="addr-info">
            <h6 className=" font-medium text-yellow-400">Call Me</h6>
            <p className="bg-gradient-to-r from-red-700 via-white to-pink-500 bg-clip-text text-transparent  md:text-base">
              +91 7752986139
            </p>
          </div>
        </div>

        <div className="footer-address flex flex-col items-center  sm:flex-row sm:items-start text-center sm:text-left">
          <span className="text-blue-400  mb-2 sm:mb-0 sm:mr-4 border border-blue-700 rounded-full px-2 py-1 hover:text-white hover:bg-blue-700">
            <MailOutlined />
          </span>
          <div className="addr-info">
            <h6 className=" font-medium text-yellow-400">Email Address</h6>
            <p className="bg-gradient-to-r from-red-700 via-white to-pink-500 bg-clip-text text-transparent  md:text-base">
              ravatvikasg@gmail.com
            </p>
          </div>
        </div>

        <div className="footer-address flex flex-col items-center sm:flex-row sm:items-start text-center sm:text-left">
          <span className="text-blue-400  mb-2 sm:mb-0 sm:mr-4 border border-blue-700 rounded-full px-2 py-1 hover:text-white hover:bg-blue-700">
            <EnvironmentOutlined />
          </span>
          <div className="addr-info">
            <h6 className=" font-medium text-yellow-400">Address</h6>
            <p className="bg-gradient-to-r from-red-700 via-white to-pink-500 bg-clip-text text-transparent md:text-base">
              Lucknow, Uttar Pradesh, India
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FooterContact;
