
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter( item => item.category === 'popular')
    return (
        <section className='mb-12'>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'From Our Menu'}
            >
            </SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    popular.map(item =>
                        <MenuItem key={item._id} item={item}></MenuItem>
                    )
                }
            </div>
        </section>
    );
};

export default PopularMenu;