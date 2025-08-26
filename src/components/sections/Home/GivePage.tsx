import { motion } from "framer-motion";
import { FaCashRegister } from "react-icons/fa";

const GivePage = () => {
  const nigerianBanks = [
    {
      bankName: "Guaranty Trust Bank (GTB)",
      accountName: "Jesus Family Bible Church",
      accountNumber: "0123456789",
    },
    {
      bankName: "First Bank of Nigeria",
      accountName: "Jesus Family Bible Church",
      accountNumber: "9876543210",
    },
  ];

  const BankAccountCard = ({ bank }: { bank: (typeof nigerianBanks)[0] }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
    >
      <div className="flex items-center gap-3 mb-4">
        <FaCashRegister className="w-6 h-6 text-primary" />
        <h3 className="text-lg font-semibold text-gray-900">{bank.bankName}</h3>
      </div>

      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2">
          <span className="text-sm font-medium text-gray-600">
            Account Name
          </span>
          <span className="text-sm text-gray-900 font-medium">
            {bank.accountName}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2 border-t border-gray-100">
          <span className="text-sm font-medium text-gray-600">
            Account Number
          </span>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-900 font-mono">
              {bank.accountNumber}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scripture Verse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center  p-6 bg-primary rounded-xl text-white mb-12"
        >
          <p className="text-lg italic mb-2">
            "Each of you should give what you have decided in your heart to
            give, not reluctantly or under compulsion, for God loves a cheerful
            giver."
          </p>
          <p className="font-semibold">2 Corinthians 9:7</p>
        </motion.div>

        {/* Bank Accounts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {nigerianBanks.map((bank, index) => (
            <BankAccountCard key={bank.bankName} bank={bank} />
          ))}
        </div>

        {/* Giving Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 mt-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Types of Giving
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-primary mb-2">
                Regular Offerings
              </h4>
              <p>
                Tithes, offerings, and first fruits for the work of the ministry
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">
                Special Projects
              </h4>
              <p>Building fund, outreach programs, and community projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GivePage;
