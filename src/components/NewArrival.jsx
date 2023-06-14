import { Image } from 'primereact/image';

export default function Card(){
    return(
      <section className='w-11 m-auto'>
<div class="grid">
<div className="col-3">
<div className="image shadow-1">
            <Image  className='image' src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.addcba21.png&w=750&q=75" alt="product__image"   width="250" />
        </div>
</div>
</div>
       
      </section>
    )
}