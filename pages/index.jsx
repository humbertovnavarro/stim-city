import Head from 'next/head'
import Header from 'components/Header';
import Image from 'next/image';
import logo from 'public/logo.png'
import React from 'react';
export default function Home() {
  return (
    <>
    <div id="retrowaveBG">
      <video autoPlay muted loop id="retrowave">
        <source src="/retrowave.mp4" type="video/mp4"/>
      </video>
    </div>
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="text-center flex flex-col items-center justify-center">
        <div className="w-64">
        <Image src={logo} className="h-10"></Image>
        </div>
        <p className="text-white rounded-md w-1/2 bg-gradient-to-r from-fuchsia-800/50 to-violet-500/50">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit ipsa unde non laborum, nemo animi mollitia accusamus necessitatibus corporis fugit. Praesentium saepe suscipit temporibus accusamus. Obcaecati, iste veniam sapiente cumque perferendis ullam quos aperiam debitis cupiditate molestiae consequatur quisquam ipsa laudantium adipisci laboriosam magnam! Fugit modi hic quasi molestiae! Laboriosam reiciendis tempore autem quidem exercitationem, dolores minus ducimus. Facilis magni suscipit aliquid. Accusantium consectetur atque quae sapiente, molestias expedita aliquid delectus fugiat, rerum amet veniam explicabo culpa minima neque sed error, voluptatum alias quidem asperiores optio ipsum? Quae nobis, eligendi ipsam est soluta laboriosam tenetur consequuntur ab itaque atque ipsum omnis nulla unde nostrum animi cumque tempora nisi consequatur fuga quidem? Iusto molestiae repudiandae, sit corrupti commodi ab! Itaque pariatur minima nulla, animi ab neque consequuntur dolores tempore voluptatum a. Voluptate, labore! Voluptatibus iste porro quibusdam quisquam sit impedit, cumque, neque nemo voluptate minima dolores quam quos qui aliquid delectus praesentium? Voluptatibus nobis architecto quas sit, debitis ex animi beatae omnis eligendi ratione ut fuga, ducimus, odio assumenda iste suscipit culpa libero harum vel. Voluptatem a eaque tempore officia sed exercitationem repudiandae accusamus corporis molestias velit. Sint molestias est aspernatur vitae blanditiis accusantium dolores? Maxime obcaecati labore explicabo fugiat, nulla suscipit exercitationem consequuntur. Error consectetur in voluptas, vitae voluptates deserunt commodi tenetur officiis ratione, sunt debitis odio quasi eaque iure distinctio ad. Quas doloremque aperiam temporibus voluptate expedita. Obcaecati omnis laboriosam fuga molestiae, voluptate exercitationem quia! Quaerat tempore quasi minima consequuntur. Quia maxime velit expedita repellendus corrupti, eos saepe alias, dolores asperiores culpa odit provident praesentium? Consectetur ipsam mollitia, quas magni dolores recusandae dignissimos earum illum similique voluptas aspernatur atque quis dicta rerum ducimus, at placeat sit deleniti. Ipsum vero, id molestiae iste voluptatum at velit recusandae possimus est eos. Cumque ex, illo adipisci repellendus consequuntur ea perspiciatis omnis? Culpa unde doloremque, debitis facilis nesciunt non explicabo quidem est sit laboriosam alias dolores pariatur atque incidunt vel amet voluptatibus autem vitae nisi. Doloremque earum commodi ratione dignissimos veritatis odio. Dolore minima voluptatem perferendis officiis, hic quia dolorem, repellat totam magni, libero a? Debitis quibusdam eligendi ducimus explicabo adipisci error numquam ipsa ex velit dolorum, harum facere minima natus consequatur, placeat fuga nihil fugiat corporis, corrupti eum! Sint quod, assumenda perspiciatis eum debitis soluta dolore molestiae, dolores, unde exercitationem consectetur ullam? Vel harum placeat odio nihil quod velit minima iste rerum, dolorum expedita dignissimos ab in exercitationem quasi, delectus fugit!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla temporibus odit optio non rerum ea doloremque inventore modi quia at quae dolorum fuga ratione eum odio reprehenderit reiciendis laboriosam doloribus ad id maiores, quibusdam minima adipisci itaque? Veniam cum esse voluptatum illo dolores animi repudiandae perspiciatis aliquid fugiat dignissimos officiis eligendi modi asperiores, consectetur accusamus quaerat, fuga corrupti ut explicabo. Eum vitae alias fuga, voluptates quaerat consectetur necessitatibus optio sunt harum officiis. Repudiandae amet similique, quo, laboriosam unde fugiat saepe iste corrupti soluta vitae illum aliquid eligendi aliquam totam doloremque voluptatem cupiditate quidem impedit vero. Provident quidem nobis aspernatur modi.
        </p>
      </main>
    </div>
    </>
  )
}
