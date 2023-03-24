import Head from 'next/head';
import bg from '../../../public/assets/periodical-dental-checkup.webp';
import EquipmentDetail from 'components/equipment-detail/equipment';


export default function TechnologyPage({ props }) {

  let data = [{
    "title": "ROOT CANAL TREATMENT WITH CUTTING EDGE TECHNOLOGY",
    "description": "We do <b><u>painless root canal treatment</u></b> with equipment that fasten up the treatment and provide world class results by using one of the best Apexlocator used in modern dentistry by J.Morita and Endo-motor (Motorised Machine based RCT).",
    "imageUrls": [{'src':'/assets/technology/endomotor.webp', 'alt':'Endomotor'}, {'src':'/assets/technology/jmorita.webp', 'alt':'Apex Locator by J.Morita'}]
  },
  {
    "title": "DIGITAL X-RAY",
    "description": "Hapliv uses <b><u>Low Radiation DC X-ray</u></b>, which is the most advanced dental X-ray technology. It reduces X-ray exposure almost by 80% when compared to other AC X-ray available in the dental market hence preventing any health hazard to our precious client. We also use CBCT, OPG, LATERAL CEPHALOGRAM in our practice for the treatment to get best dental treatment results wherever required.",
    "imageUrls": [{'src':'/assets/technology/DC XRAY.webp','alt':'DC Xray'},{'src':'/assets/technology/opg.webp','alt':'OPG Xray'}]
  }, {
    "title": "DIGITAL X-RAY SENSOR",
    "description": "Those patients who do not enjoy dental X-ray tedious old school methods of keeping that huge sharp X-ray film in their mouth, which is time consuming and needs a dark room. You can visit us at Hapliv as we use a digital X-ray machine & sensor for diagnostic records.This makes the dental treatment experience much easier and comfortable.",
    "imageUrls": [{'src':'/assets/technology/RVG FINAL.webp','alt':'RVG Digital X-Ray Sensor'}]
  }, {
    "title": "INTRA-ORAL CAMERA",
    "description": "Earlier patients were not able to see their own dental health problems like dental cavity, bleeding gums etc, but newer technology like intraoral cameras made it possible for patients to see their own dental issues in just few seconds during consultation with the dentist. It helps them to understand the core problems in their oro cavity and prioritize the dental treatment first.You will be glad to know that Hapliv Dental clinic uses this technology.",
    "imageUrls": [{'src':'/assets/technology/INTRA-ORAL CAMERA.webp','alt':'Intra Oral Camera'}]
  }, {
    "title": 'LASER DENTISTRY',
    "description": 'LASERs gained popularity in dentistry in the 1990s. Earlier most of the procedure done were surgically but introduction of LASER in dentistry has transformed dental procedures to minimal invasive, pain free, hassle free & with minimum restriction after procedure. <p><br/></p> LASERS are used for variety of dental procedure like fasten up ulcer healing, TMJ pain, teeth whitening, ZOOM teeth whitening, gum depigmentation & smile designing etc. LASER works at the root level of the problem so we do at Hapliv to provide world class treatment to ensure our patients comfort as our first vision and mission.',
    "imageUrls": [{'src':'/assets/technology/biolase laser.webp','alt':'Laser'}]
  },{
    "title": 'STERILIZATION',
    "description": 'We at Hapliv dental clinic have <b>Strict sterilization </b>norms which are followed by our staff & managed by our dentist in M3M TEE Point at Hapliv Dental Clinic premises to ensure proper health and hygiene of the patients. In house Sterilization equipment makes it easier for us to provide you 100% sterile treatment and environment. We follow strict COVID19 protocols and provide dental treatment to our patients in a safe environment with full equipment and instruments sterilization. So, you can trust us, you are safe hands!!',
    "imageUrls": [{'src':'/assets/technology/sterlization.webp','alt':'UV sterilization'},{'src':'/assets/technology/ppe-sterlization.webp','alt':'PPE Kit'}]
  },{
    "title": '3D INTRAORAL DIGITAL SCANNER',
    "description": 'Scared of old flavored alginate dental impression? At Hapliv we are using ITero and 3 Shape intraoral digital scanners which obsolete old ways of making dental records for orthodontic braces treatment,invisalign treatment, crown & bridges and dental implants.<p><br/></p><p> 3D scanners are precise, comfortable, time saver, eco friendly and most importantly you can see instant smile transformation results just in a few seconds vola!! This is because of cutting edge technology used in their software that helps patients to visualize their final treatment results instantly.We use the latest CAD-CAM technique for dental laboratory work.</p>',
    "imageUrls": [{'src':'/assets/technology/itero2.webp', 'alt':'3D Intraoral Digital Scanner'}]
  },{
    "title": 'SCALER, CURING LAMP & DENTAL MATERIAL',
    "description": 'Latest machine used for cleaning bacterial plaque and calculus for dental scaling and curing lamp is used for fasten up results in dental cavity filling procedure. We are consumers of dental material like 3M(EPSE), SHOFU & Ormco in our day to day dental practice.',
    "imageUrls": [{'src':'/assets/technology/scaler.webp', 'alt':'Scaler'}]
  }];

  return (
    <>
      <Head>
        <title>Technology we use at Hapliv Dental Clinic</title>
        <meta name="description" content="At Hapliv we use latest technology" />
        <meta name="keywords" content="Dental Technology, Endomotor, Cosmetic treatment, Low radition digital x-ray" />
      </Head>
      <div className="bg-center bg-no-repeat bg-cover top-40 backdrop-blur-lg" style={{
        backgroundImage: "url(" + `${bg.src}` + ")",
        minHeight: '32em'
      }}>
        <div className='block p-8'>
          <div className='m-auto md:w-8/12 border-zinc-600 border-4 p-4 mt-44 backdrop-blur-lg bg-white/50 top-3.5'>
            <div className='m-auto text-center'>
              <h1 className='font-bold text-black uppercase md:text-3xl sm:text-xl'>
                Dental Technology we use</h1>
              <p className="m-4 italic text-left text-black md:text-xl sm:text-md">
                At Hapliv, We are committed to use cutting edge technology in our day to day practice that helps us to provide world's best dental treatment to our patients with latest equipments and technique in Gurugram and Delhi-NCR
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10 text-center'>
        <h2 className="text-xl font-bold text-black">
          Modern Dental Equipment
        </h2>
        <div className="grid gap-4 p-4 text-black md:m-10 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 min-h-fit backdrop-blur-sm">
          {data.map((tech,index) => {
            return (
              <EquipmentDetail key={'equi-'+index} title={tech.title} description={tech.description} imgList={tech.imageUrls}></EquipmentDetail>
            );
          })}
        </div>
      </div>
    </>
  );
};



