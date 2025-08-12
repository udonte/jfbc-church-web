import ActionButton from "@/components/ui/ActionButton";
import { motion } from "framer-motion";
import { FiMail, FiUser } from "react-icons/fi";
import PastorImage from "@/assets/images/revd-odusanya.jpg";
import MrsOdusanya from "@/assets/images/mrs-odusanya.jpg";

const leadership = [
  {
    name: "Pastor Mrs Morenikeji Odusanya",
    role: "First Lady & Women's Ministry Leader",
    bio: "Mrs Odusanya oversees our women's discipleship programs and counseling ministry. A trained educator, she brings wisdom and compassion to her leadership role.",
    image: MrsOdusanya,
  },
  {
    name: "Pastor Ifeanyi Nkem",
    role: "Assistant Pastor",
    bio: "Pastor David coordinates our local and international missions programs. Under his leadership, we've planted 3 churches in rural communities.",
    image: "/leadership/pastor-david.jpg",
  },
  {
    name: "Pastor Segun Fagbemi",
    role: "Assistant Pastor",
    bio: "Pastor Michael joined JFBC in 2005 and oversees church operations and small group ministries. He's passionate about organizational excellence in the church.",
    image: "/leadership/pastor-michael.jpg",
  },
  {
    name: "Pastor Tope Afolabi",
    role: "Assistant Pastor",
    bio: "A dynamic teacher and mentor, Pastor Sarah leads our thriving youth ministry with over 200 active members. She holds a degree in Christian Education.",
    image: "/leadership/pastor-sarah.jpg",
  },
];

const LeadershipSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Servant leaders guiding our church family
          </p>
        </motion.div>

        {/* General Overseer Highlight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className=" bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3">
              <img
                src={PastorImage}
                alt="Pastor James Okonkwo"
                className="w-full h-full object-cover min-h-64"
                loading="lazy"
              />
            </div>
            <div className="lg:w-2/3 p-8">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-2 rounded-lg mr-4">
                  <FiUser className="text-secondary" size={20} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  General Overseer
                </h3>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Revd. Prof. Olumuyiwa Odusanya
              </h2>
              <div className="prose text-gray-600 space-y-4">
                <p>
                  With over three decades of faithful ministry, Revd Odusanya
                  has led JFBC from a small gathering to a thriving congregation
                  impacting communities.
                </p>
                <p>
                  His expository preaching style and practical application of
                  Scripture have become hallmarks of JFBC's teaching ministry.
                  Revd Odusanya is deeply committed to raising the next
                  generation of Christian leaders.
                </p>
                <p>
                  He and his wife, Pastor Mrs Odusanya, have been married for 35
                  years and are blessed with two children.
                </p>
              </div>
              <div className="mt-8">
                <ActionButton
                  page="/#"
                  variant="primary"
                  size="lg"
                  icon={<FiMail />}
                >
                  Contact Revd Odusanya
                </ActionButton>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {leadership.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Leader Photo */}
              <div className="h-64 overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Leader Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {leader.name}
                </h3>
                <p className="text-primary font-medium mb-4">{leader.role}</p>
                <p className="text-gray-600 mb-6">{leader.bio}</p>

                <ActionButton
                  page={`/contact?subject=Contact ${leader.name.split(" ")[0]}`}
                  variant="outline"
                  size="sm"
                  icon={<FiMail />}
                  fullWidth
                >
                  Contact {leader.name.split(" ")[0]}
                </ActionButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
