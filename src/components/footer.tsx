export const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8]">
      <div className="section-container">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="md:max-w-sm">
            <h3 className="text-headingText font-bold leading-3 pb-10">
              Kaleem Ullah
            </h3>
            <p className="text-textPrimary">
              Crafting exceptional digital experiences with a focus on user
              experience, performance, and modern design patterns.
            </p>
          </div>
          <div className="flex flex-col justify-center text-textPrimary">
            <h3 className="text-headingText font-bold leading-3">
              Get In Touch
            </h3>
            <div className="text-textPrimary pt-10 flex flex-col gap-3">
              {/* <div className="flex items-center gap-3">
                <div className="bg-secondary rounded-full px-2 py-2">📱</div>
                <div className="flex flex-col justify-center">
                  <h4>Phone</h4>
                  <p>+1 (123) 456-7890</p>
                </div>
              </div> */}
              <div className="flex items-center gap-3">
                <div className="bg-secondary rounded-full px-2 py-2">✉️</div>
                <div className="flex flex-col justify-center">
                  <h4>Email</h4>
                  <p>kaleemullah786.ku61@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-secondary rounded-full px-2 py-2">📍</div>
                <div className="flex flex-col justify-center">
                  <h4>Location</h4>
                  <p>San Francisco, California</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-secondary rounded-full px-2 py-2">⏰</div>
                <div className="flex flex-col justify-center">
                  <h4>Working Hours</h4>
                  <p>Monday - Friday: 9am - 5pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pb-10">
          <hr className="text-white border-secondary" />
          <p className="text-textPrimary text-center pt-5">
            © 2025 Kaleem Ullah. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
