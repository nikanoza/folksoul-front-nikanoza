import { Card, InfoHeader, LinkForm, Menu } from 'components';

const NewLink = () => {
  return (
    <div className='w-full h-full flex items-center bg-[radial-gradient(50%_50%_at_50%_50%,_#534571_0%,_#342C46_100%)]'>
      <Menu />
      <Card>
        <InfoHeader className='mt-16'>დაამატე სოციალური ბმული</InfoHeader>
        <LinkForm />
      </Card>
    </div>
  );
};

export default NewLink;
