import Marquee from "react-fast-marquee";
import SermonPoint1 from "@/assets/images/sermon points/semon-point1.jpg";
import SermonPoint2 from "@/assets/images/sermon points/semon-point2.jpg";
import SermonPoint3 from "@/assets/images/sermon points/semon-point3.jpg";
import SermonPoint4 from "@/assets/images/sermon points/semon-point4.jpg";
import SermonPoint5 from "@/assets/images/sermon points/semon-point5.jpg";
import SermonPoint6 from "@/assets/images/sermon points/semon-point6.jpg";
import SermonPoint7 from "@/assets/images/sermon points/semon-point7.jpg";
import SermonPoint8 from "@/assets/images/sermon points/semon-point8.jpg";
import SermonPoint9 from "@/assets/images/sermon points/semon-point9.jpg";
import SermonPoint10 from "@/assets/images/sermon points/semon-point10.jpg";
import SermonPoint11 from "@/assets/images/sermon points/semon-point11.jpg";
import SermonPoint12 from "@/assets/images/sermon points/semon-point12.jpg";
import SermonPoint13 from "@/assets/images/sermon points/semon-point13.jpg";
import SermonPoint14 from "@/assets/images/sermon points/semon-point14.jpg";
import SermonPoint15 from "@/assets/images/sermon points/semon-point15.jpg";
import SermonPoint16 from "@/assets/images/sermon points/semon-point16.jpg";
import SermonPoint17 from "@/assets/images/sermon points/semon-point17.jpg";
import SermonPoint18 from "@/assets/images/sermon points/semon-point18.jpg";
import SermonPoint19 from "@/assets/images/sermon points/semon-point19.jpg";
import SermonPoint20 from "@/assets/images/sermon points/semon-point20.jpg";
import SermonPoint21 from "@/assets/images/sermon points/semon-point21.jpg";
import SermonPoint22 from "@/assets/images/sermon points/semon-point22.jpg";
import SermonPoint23 from "@/assets/images/sermon points/semon-point23.jpg";
import SermonPoint24 from "@/assets/images/sermon points/semon-point24.jpg";
import SermonPoint25 from "@/assets/images/sermon points/semon-point25.jpg";
import SermonPoint26 from "@/assets/images/sermon points/semon-point26.jpg";
import SermonPoint27 from "@/assets/images/sermon points/semon-point27.jpg";
import SermonPoint28 from "@/assets/images/sermon points/semon-point28.jpg";
import SermonPoint29 from "@/assets/images/sermon points/semon-point29.jpg";
import SermonPoint30 from "@/assets/images/sermon points/semon-point30.jpg";
import SermonPoint31 from "@/assets/images/sermon points/semon-point31.jpg";
import SermonPoint32 from "@/assets/images/sermon points/semon-point32.jpg";

const SermonPoints = () => {
  const partners = [
    {
      id: 1,
      image: SermonPoint1,
    },
    {
      id: 2,
      image: SermonPoint2,
    },
    {
      id: 3,
      image: SermonPoint3,
    },
    {
      id: 4,
      image: SermonPoint4,
    },
    {
      id: 5,
      image: SermonPoint5,
    },
    {
      id: 6,
      image: SermonPoint6,
    },
    {
      id: 7,
      image: SermonPoint7,
    },
    {
      id: 8,
      image: SermonPoint8,
    },
    {
      id: 9,
      image: SermonPoint9,
    },
    {
      id: 10,
      image: SermonPoint10,
    },
    {
      id: 11,
      image: SermonPoint11,
    },
    {
      id: 12,
      image: SermonPoint12,
    },
    {
      id: 13,
      image: SermonPoint13,
    },
    {
      id: 14,
      image: SermonPoint14,
    },
    {
      id: 15,
      image: SermonPoint15,
    },
    {
      id: 16,
      image: SermonPoint16,
    },
    {
      id: 17,
      image: SermonPoint17,
    },
    {
      id: 18,
      image: SermonPoint18,
    },
    {
      id: 19,
      image: SermonPoint19,
    },
    {
      id: 20,
      image: SermonPoint20,
    },
    {
      id: 21,
      image: SermonPoint21,
    },
    {
      id: 22,
      image: SermonPoint22,
    },
    {
      id: 23,
      image: SermonPoint23,
    },
    {
      id: 24,
      image: SermonPoint24,
    },
    {
      id: 25,
      image: SermonPoint25,
    },
    {
      id: 26,
      image: SermonPoint26,
    },
    {
      id: 27,
      image: SermonPoint27,
    },
    {
      id: 28,
      image: SermonPoint28,
    },
    {
      id: 29,
      image: SermonPoint29,
    },
    {
      id: 30,
      image: SermonPoint30,
    },
    {
      id: 31,
      image: SermonPoint31,
    },
    {
      id: 32,
      image: SermonPoint32,
    },
  ];

  return (
    <section className="px-4 py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-oghosa-green/10 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-oghosa-gold/10 rounded-full blur-xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Partner grid */}
        <div className="w-full overflow-hidden">
          <div className="bg-black">
            <Marquee
              className="w-full flex items-center justify-center"
              speed={25}
              pauseOnHover={true}
            >
              {partners.map((partner) => (
                <div key={partner.id} className="mx-4 w-[100px] md:w-[300px]">
                  <img
                    src={partner.image}
                    alt="SermonPoint"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SermonPoints;
