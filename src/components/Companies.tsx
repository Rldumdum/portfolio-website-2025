
const Companies = () => {
  const companies = [
    { name: "Six Eleven Global Services", logo: "/logo/six-eleven-center-logo.png" },
    { name: "Davao City Water District", logo: "/logo/sunstar2024-026870f091-6b2e-4b5f.png" },
    { name: "Aquila Softwares", logo: "/logo/logo.3e1d7bed.png" },
    { name: "Adukasyon", logo: "/logo/LOGO.png" },
    { name: "VXI Global Services", logo: "/logo/vxi-global-solutions-1200px-logo.png" },
    
  ];

  // Duplicate companies for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg font-medium">Companies I Have Work With</p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left">
            {duplicatedCompanies.map((company, index) => (
              <div 
                key={`${company.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow duration-300">
                  <img 
                    src={company.logo}
                    alt={company.name}
                    className="max-w-24 max-h-10 object-contain filter  hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
