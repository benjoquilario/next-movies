const Loading = () => {
  return (
    <div className="min-h-screen bg-[#0B1622] flex justify-center">
      <div className="lds-ellipsis mt-8">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
