import { Brain, Puzzle } from 'lucide-react';
import { Card } from './ui/card';
import { ABOUT_CONTENT } from '@/constants/aboutContent';

const iconMap = {
   Brain,
   Puzzle
}


function AboutMe() {

    return (
        <section id="about" className="grid grid-cols-1 md:flex gap-10 py-section">
            <Card className=' p-2 shrink-0'>
                <figure className='h-[32.2rem] w-96 object-contain rounded-lg'>
                    <img src={ABOUT_CONTENT.img.src} alt={ABOUT_CONTENT.img.alt} className=" rounded-lg w-full h-full object-cover" />
                </figure>
            </Card>
        
            <div className='flex flex-col text-gray col-span-2 gap-4'>
                <h2 className='text-5xl font-semibold text-white'>{ABOUT_CONTENT.title}</h2>
                
                <div>
                    {ABOUT_CONTENT.paragraph.map((line, index) => (
                        <p key={index} className='text-xl text-gray mt-2'>
                            {line}
                        </p>
                    ))}
                </div>

                <div className='flex mt-2 gap-4 w-full'>
                    {ABOUT_CONTENT.cards.map((card, index) => {
                        const Icon = iconMap[card.icon.name as keyof typeof iconMap]
                        return (
                            <Card key={index} className='gap-2'>
                                <div className="flex items-center gap-3">
                                    <Icon className={card.icon.color} size={20} />
                                    <h3 className="text-xl font-bold">{card.title}</h3>
                                </div>
                                <p>{card.description}</p>

                            </Card>
                        )
                    })}
                   
                </div>
            </div>
        </section>
    );
}

export default AboutMe;