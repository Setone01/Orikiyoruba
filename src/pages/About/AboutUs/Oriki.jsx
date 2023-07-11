import React from "react";

const Oriki = () => {
  return (
    <div className="w-screen max-h-max bg-secondary">
      <div className=" bg-transparent py-14 px-5 md:px-24">
        <div className="bg-transparent mb-6 capitalize">
          <h1 className="bg-transparent text-2xl text-primary1">
            about oriki yoruba
          </h1>
        </div>
        <div className=" bg-transparent grid grid-col-1 md:grid-cols-2 gap-12">
          <p className="bg-transparent text-base text font-light indent-6">
            Yoruba is a nation of many families, with each of the family having
            their ancestry traced to one or more of the primordial tribes that
            originated from the several settlements of great warriors that
            sprung out of the ancient linage of Oduduwa. 

            <p className="bg-transparent text-base text font-light mt-4">Yoruba tribes are
            bounded together with a common language by virtue of the filial
            connection, and in turn, they all share similar beliefs with diverse
            traditions that are driven by a noble heritage of oral literacy.</p>
          </p>
          <p className="bg-transparent text-base text font-light indent-6 -mt-6 md:mt-0">
            Orikiyoruba.com® is an online platform that is set up to propagate
            the cultural values and socio-linguistics features of the Yoruba
            oral literacy, i.e. the collection of traditional Yoruba oral
            corpuses, asserting the characteristic features and notable values
            of respective Yoruba families, as a way to show case the ingenuity
            of Yoruba nation for global appreciation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Oriki;
