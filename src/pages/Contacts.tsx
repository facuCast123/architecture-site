import { Map, Marker } from "pigeon-maps";

const Contacts = () => {
  return (
    <section className="flex h-screen items-center mt-10 pb-20">
      <div className="basis-1/3 flex flex-col">
        <h1 className="text-6xl font-semibold my-12">
          <span className="font-light opacity-30">Contact</span>
          <br />
          Information
        </h1>

        <div className="flex flex-col gap-y-8">
          <p className="text-lg">
            <span className="font-bold">Company Address</span>
            <br />
            Sample Street Austin Texas 78704
          </p>
          <p className="text-lg">
            <span className="font-bold">Company Phone</span>
            <br />
            +1 512 33345587
          </p>
          <p className="text-lg">
            <span className="font-bold">E-mail Address</span>
            <br />
            samplemail@gmail.com
          </p>
          <button className="w-fit px-14 py-7 flex items-center gap-x-4 bg-neutral-800 text-white uppercase tracking-widest cursor-pointer self-center group md:self-start">
            <p className="group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,1)] group-hover:ease-out duration-300">
              Contact Us
            </p>
          </button>
        </div>
      </div>

      <div className="basis-2/3 h-full border border-black [&>*]:h-full">
        <Map defaultCenter={[30.277133, -97.738473]} defaultZoom={10}>
          <Marker width={50} anchor={[30.277133, -97.738473]} />
        </Map>
      </div>
    </section>
  );
};

export default Contacts;
