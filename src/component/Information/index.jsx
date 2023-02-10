import React, {useEffect} from 'react';
import "./style.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import hospital_foto_1 from './image/hospital1.jpg'
import hospital_foto_2 from './image/hospital2.jpg'
import hospital_foto_3 from './image/hospital3.jpg'
import hospital_foto_4 from './image/hospital4.jpg'

const Information = () => {

useEffect(() => {
    Aos.init({
        duration: 1500
    })
}, [])


  return (
    <div className='infrom-side'>
        <h1>OUR HOSPITALS</h1>
        <div className='first-side'>
            <div data-aos="fade-right" className='font-side'>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, recusandae modi pariatur quaerat nisi illo!  Ipsam eos, eligendi, dolorum doloremque aspernatur atque id voluptate minus culpa ab quasi praesentium dolores? Esse atque consequuntur minima possimus dolores necessitatibus molestias architecto vero quisquam cumque, fuga aut, error blanditiis provident nobis quas a unde aliquam voluptate cum temporibus aliquid? Possimus ex quis quam est. Sed nihil iste repellendus facere quam ipsum dolorem perspiciatis quae quos dolores, voluptates architecto, inventore numquam fugit odit. Necessitatibus illum temporibus a perferendis omnis officiis quas placeat aperiam odio dolor? Laboriosam, delectus suscipit illo, dolores neque incidunt repudiandae eum maxime itaque laudantium velit quasi accusamus nam rem. </p>
            </div>
            <img data-aos="fade-left" src={hospital_foto_1} alt="" />
        </div>
        <div className='second-side'>
            <img data-aos="fade-right" src={hospital_foto_2} alt="" />
            <div data-aos="fade-left" className='font-side'>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque qui nobis repellendus iste officiis. Nam deserunt accusamus, illo illum voluptate harum sit unde, suscipit expedita possimus quas repudiandae eius aut! Quia minima repellat perspiciatis laboriosam dolorem deleniti natus minus, amet, accusamus deserunt adipisci doloremque voluptatem, consequuntur cumque rerum placeat vero commodi magnam ex modi rem quis necessitatibus aperiam sit. Eligendi impedit quis, corrupti voluptatibus cupiditate minus. Ipsum velit, pariatur praesentium perferendis sint, ratione facilis, vitae dignissimos saepe nihil fuga nemo repudiandae cumque officia accusantium unde? Delectus ad illum error a dolor sunt impedit modi quae, nulla quam eaque ratione voluptas perspiciatis nihil cupiditate ab facere enim minima.</p>
            </div>
        </div>
        <div className='first-side'>
            <div data-aos="fade-right" className='font-side'>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, recusandae modi pariatur quaerat nisi illo! Ipsam eos, eligendi, dolorum doloremque aspernatur atque id voluptate minus culpa ab quasi praesentium dolores? Esse atque consequuntur minima possimus dolores necessitatibus molestias architecto vero quisquam cumque, fuga aut, error blanditiis provident nobis quas a unde aliquam voluptate cum temporibus aliquid? Possimus ex quis quam est. Sed nihil iste repellendus facere quam ipsum dolorem perspiciatis quae quos dolores, voluptates architecto, inventore numquam fugit odit. Necessitatibus illum temporibus a perferendis omnis officiis quas placeat aperiam odio dolor? Laboriosam, delectus suscipit illo, dolores neque incidunt repudiandae eum maxime itaque laudantium velit quasi accusamus nam rem. </p>
            </div>
            <img data-aos="fade-left" src={hospital_foto_3} alt="" />
        </div>
        <div className='second-side'>
            <img data-aos="fade-right" src={hospital_foto_4} alt="" />
            <div data-aos="fade-left" className='font-side'>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque qui nobis repellendus iste officiis. Nam deserunt accusamus, illo illum voluptate harum sit unde, suscipit expedita possimus quas repudiandae eius aut! Quia minima repellat perspiciatis laboriosam dolorem deleniti natus minus, amet, accusamus deserunt adipisci doloremque voluptatem, consequuntur cumque rerum placeat vero commodi magnam ex modi rem quis necessitatibus aperiam sit. Eligendi impedit quis, corrupti voluptatibus cupiditate minus. Ipsum velit, pariatur praesentium perferendis sint, ratione facilis, vitae dignissimos saepe nihil fuga nemo repudiandae cumque officia accusantium unde? Delectus ad illum error a dolor sunt impedit modi quae, nulla quam eaque ratione voluptas perspiciatis nihil cupiditate ab facere enim minima.  </p>
            </div>
        </div>
    </div>
  )
}

export default Information
