import { navLinks } from 'components/header/navbarData';
import Link from 'next/link';

export const metadata = {
  title: 'Dental Problems and treatments at Hapliv Dental Clinic',
  alternates: { canonical: '/treatments' },
};

export default function TreatmentsIndexPage() {
  const services = navLinks.filter((item) => item.path === '/treatments');
  return (
    <div className="container m-auto p-4">
      <div className="mt-44">
        <div className="flex items-center justify-center text-orange-900">
          <h1 className="text-3xl font-bold">Dental Problems &amp; treatments</h1>
        </div>

        <article className="p-4">
          <h3 className="text-xl font-bold">Introduction</h3>
          <p className="mt-4">
            Dental problems are common among people of all ages. These problems can range from minor issues like bad breath to more severe conditions like gum
            disease, tooth decay, oral cancer, and more. Dental problems can cause discomfort, pain, and can affect overall health if left untreated.
          </p>
        </article>

        <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Tooth Decay',
              body:
                "Tooth decay, also known as cavities, is one of the most prevalent dental problems. It occurs when bacteria in the mouth produce acids that attack the tooth's enamel, causing it to break down. The most common reasons behind tooth decay are poor oral hygiene, sugary and acidic foods and drinks, and dry mouth. Tooth decay can cause pain, sensitivity, and even tooth loss. The corrective approach to treating tooth decay is to remove the decayed part of the tooth and replace it with a filling material. In severe cases, a root canal treatment or extraction may be necessary.",
            },
            {
              title: 'Gum Disease',
              body:
                'Gum disease, also known as periodontal disease, is another prevalent dental problem that affects the gums and bones that support the teeth. The primary cause of gum disease is poor oral hygiene, which leads to plaque buildup on the teeth and gums. Smoking, diabetes, and certain medications can also contribute to gum disease. Gum disease can cause gum recession, tooth loss, and even bone loss. The corrective approach to treating gum disease involves professional cleaning to remove plaque and tartar buildup. In severe cases, surgery may be necessary to repair damaged gums and bones.',
            },
            {
              title: 'Teeth Sensitivity',
              body:
                "Teeth sensitivity occurs when the tooth's enamel wears down or the gums recede, exposing the tooth's underlying layer. The most common cause of teeth sensitivity is brushing too hard, which can wear down the enamel. Other reasons include gum disease, teeth grinding, and acidic foods and drinks. Teeth sensitivity can cause pain or discomfort when eating or drinking hot, cold, or sweet foods and drinks. The corrective approach to treating teeth sensitivity involves using a desensitizing toothpaste, avoiding acidic foods and drinks, and wearing a mouthguard to prevent teeth grinding.",
            },
            {
              title: 'Bad Breath',
              body:
                'Bad breath, also known as halitosis, is a common dental problem that can be embarrassing and affect self-esteem. The primary cause of bad breath is poor oral hygiene, which leads to the buildup of bacteria in the mouth. Other reasons include dry mouth, certain foods, and tobacco use. The corrective approach to treating bad breath involves regular brushing and flossing, using an antibacterial mouthwash, and drinking plenty of water to prevent dry mouth.',
            },
            {
              title: 'Oral Cancer',
              body:
                'Oral cancer is a serious dental problem that affects the mouth, tongue, and throat. The primary cause of oral cancer is tobacco use, excessive alcohol consumption, and HPV infection. Oral cancer can cause difficulty in speaking, chewing, and swallowing. The corrective approach to treating oral cancer involves surgery, radiation therapy, and chemotherapy.',
            },
            {
              title: 'Crowded Teeth',
              body:
                'Crowded teeth occur when there is not enough space in the mouth for all the teeth to grow properly. The primary cause of crowded teeth is genetics. Crowded teeth can cause difficulty in cleaning, leading to cavities and gum disease. The corrective approach to treating crowded teeth involves orthodontic treatment, such as braces or clear aligners.',
            },
            {
              title: 'Missing Teeth',
              body:
                'Missing teeth are a common dental problem that can affect speech, eating, and overall self-esteem. The primary causes of missing teeth are tooth decay and gum disease. Trauma to the mouth and genetics can also contribute to missing teeth. The corrective approach to treating missing teeth involves dental implants, bridges, or dentures.',
            },
            {
              title: 'Grinding and Clenching',
              body:
                'Grinding and clenching, also known as bruxism, is a common dental problem that can cause headaches, jaw pain, and worn-down teeth. The primary causes of grinding and clenching are stress and anxiety. The corrective approach to treating grinding and clenching involves wearing a mouthguard at night and stress reduction techniques.',
            },
          ].map((it) => (
            <article key={it.title} className="max-h-100 overflow-auto border border-red-100 p-4 shadow-md">
              <h3 className="text-xl font-bold">{it.title}</h3>
              <p className="mt-4">{it.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-8">
          <article className="p-4">
            <h3 className="text-2xl font-bold">Treatments</h3>
            <p className="mt-4">
              Dental problems are preventable with proper oral hygiene and regular dental checkups. Tooth decay, gum disease, teeth sensitivity, bad breath, oral
              cancer, crowded teeth, missing teeth, and grinding and clenching are some of the most common dental problems. Poor oral hygiene is the primary cause of
              these issues, but other factors like diet, lifestyle, and genetics can also contribute.
            </p>
          </article>
          <p className="p-4">
            The corrective approach to treating dental problems depends on the severity of the issue. It is always better to consult a dentist for proper diagnosis
            and treatment.
          </p>
          <ul className="items-center p-4">
            {services[0].children.map((item, idx) => (
              <li key={idx} className="hover:cursor-pointer">
                <Link href={item?.path}>
                  <h3 className="p-2 text-xl underline">{item?.name}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

