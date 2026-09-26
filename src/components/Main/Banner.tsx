import useSimpleBanner from "../Hooks/useSimpleBanner";
import styleBanner from "../Styles/Main/Banner.module.css";
interface Props {
  number: number;
}

const Banner = ({ number }: Props) => {
  const { data: list, error, isLoading } = useSimpleBanner(number);

  return (
    <div className={[styleBanner.container].join(" ")}>
      {list?.map((item, index) => (
        <div
          key={index}
          className={[styleBanner.banner, "overflow-hidden"].join(" ")}>
          <img
            className="w-100 h-100 object-fit-cover"
            src={item.imgWebp}
            alt={item.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Banner;
