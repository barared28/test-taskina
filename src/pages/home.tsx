import SelectMultiple from "@/components/select-multiple";

const DATA_MOCKUP = [
  {
    value: "page-1",
    label: "Page 1",
  },
  {
    value: "page-2",
    label: "Page 2",
  },
  {
    value: "page-3",
    label: "Page 3",
  },
  {
    value: "page-4",
    label: "Page 4",
  },
  {
    value: "page-5",
    label: "Page 5",
  },
  {
    label: "Page 6",
    value: "page-6",
  },
];

const HomePage = () => {
  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">
      <SelectMultiple data={DATA_MOCKUP} label="All pages" />
    </div>
  );
};

export default HomePage;
