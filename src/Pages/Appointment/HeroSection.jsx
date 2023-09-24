import HeroImg from '../../assets/images/chair.png';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const HeroSection = ({selectedDate, setSelectedDAte}) => {
    return (
        <section>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='HeroImage' src={HeroImg} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDAte}
                        />
                        <p className='ml-7'>Your selected Date is {format(selectedDate,'PP')}</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;