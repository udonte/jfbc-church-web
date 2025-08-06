import ActionButton from "@/components/ui/ActionButton";
import { useState } from "react";
import { FiLock, FiDollarSign, FiHeart } from "react-icons/fi";

const OnlineGiving = () => {
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [isProcessing, setIsProcessing] = useState(false);

  const presetAmounts = [5000, 10000, 20000, 50000]; // Amounts in Naira

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Process payment here (integrate with Paystack API)
    console.log(`Donating ${amount} as ${frequency} payment`);
    // Simulate processing
    setTimeout(() => setIsProcessing(false), 2000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online Giving
            </h2>
            <p className="text-lg text-gray-600">
              Partner with us in advancing God's kingdom
            </p>
          </div>

          {/* Giving Panel */}
          <div className="bg-gray-50 rounded-xl shadow-sm p-8">
            <form onSubmit={handleSubmit}>
              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-4">
                  Select Amount (₦)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setAmount(amt.toString())}
                      className={`py-3 px-4 rounded-lg border transition-colors ${
                        amount === amt.toString()
                          ? "bg-primary border-primary text-white"
                          : "bg-white border-gray-300 hover:border-primary"
                      }`}
                    >
                      ₦{amt.toLocaleString()}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiDollarSign className="text-gray-400" />
                  </div>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Custom amount"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              {/* Frequency Selection */}
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-4">
                  Frequency
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["one-time", "weekly", "monthly"].map((freq) => (
                    <button
                      key={freq}
                      type="button"
                      onClick={() => setFrequency(freq)}
                      className={`py-3 px-4 rounded-lg border transition-colors capitalize ${
                        frequency === freq
                          ? "bg-primary border-primary text-white"
                          : "bg-white border-gray-300 hover:border-primary"
                      }`}
                    >
                      {freq.replace("-", " ")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Why We Give */}
              <div className="mb-8 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start">
                  <FiHeart className="flex-shrink-0 mt-1 mr-3 text-primary" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Why We Give
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Your generous giving enables our church to share the
                      Gospel, serve our community, and maintain our facilities.
                      Every gift makes a difference in advancing God's kingdom.
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <div className="flex items-center text-sm text-gray-600">
                  <FiLock className="mr-2 text-green-600" />
                  <span>Secure Payments</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span>256-bit SSL Encryption</span>
                </div>
              </div>

              {/* Submit Button */}
              <ActionButton
                variant="secondary"
                size="lg"
                className="w-full"
                disabled={!amount || isProcessing}
              >
                {isProcessing ? "Processing..." : "Give Securely"}
              </ActionButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineGiving;
