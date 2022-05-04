interface IBannerProps {
  selectedBanner: string;
}

const Banner = ({ selectedBanner }: IBannerProps) => {
  return (
    <div className="relative">
      <div
        className="h-[450px] max-w-screen-2xl bg-center bg-no-repeat bg-cover mt-[-28px]"
        style={{ backgroundImage: `url('${selectedBanner}')` }}
      >
        <div className="bg-banner-shadow h-full w-full"></div>
      </div>
    </div>
  );
};

export default Banner;
