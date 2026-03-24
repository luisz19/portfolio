import { Brain, Puzzle } from 'lucide-react';
import { Card } from './ui/card';
import { ABOUT_CONTENT } from '@/constants/aboutContent';
import { motion } from 'framer-motion';
import { itemVariants } from '@/lib/animations';
import { Section } from './Section';

const iconMap = {
   Brain,
   Puzzle
}


function AboutMe() {

    return (
        <Section 
            id="about" 
            className="flex flex-col md:flex-row md:gap-10 gap-4"         
        >
            <motion.div variants={itemVariants} className="w-full md:w-auto">
                <Card className=' p-2 shrink-0 w-full justify-center'>
                    <figure className='md:h-[32.2rem] md:w-96 h-96 w-full object-contain rounded-lg'>
                        <img src={ABOUT_CONTENT.img.src} alt={ABOUT_CONTENT.img.alt} className=" rounded-lg w-full h-full object-cover" />
                    </figure>
                </Card>
            </motion.div>
        
            <motion.div variants={itemVariants} className='flex flex-col text-gray md:flex-1  md:gap-4 w-full'>
                <h2 className='md:text-5xl text-3xl font-semibold text-white'>{ABOUT_CONTENT.title}</h2>
                
                <div>
                    {ABOUT_CONTENT.paragraph.map((line, index) => (
                        <p key={index} className='text-xl text-gray mt-3 md:mt-2'>
                            {line}
                        </p>
                    ))}
                </div>

                <div className='flex flex-col sm:flex-row md:mt-2 mt-4 gap-4 w-full'>
                    {ABOUT_CONTENT.cards.map((card, index) => {
                        const Icon = iconMap[card.icon.name as keyof typeof iconMap]
                        return (
                            <Card key={index} className='gap-2 w-full sm:flex-1'>
                                <div className="flex items-center gap-3">
                                    <Icon className={card.icon.color} size={20} />
                                    <h3 className="text-xl font-bold">{card.title}</h3>
                                </div>
                                <p>{card.description}</p>

                            </Card>
                        )
                    })}
                   
                </div>
            </motion.div>
        </Section>
    );
}

export default AboutMe;