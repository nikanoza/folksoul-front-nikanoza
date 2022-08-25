import { SubmitHandler, useForm } from 'react-hook-form';
import { MusicianFormValues } from 'types/forms';
import Button from './Button';
import Input from './Input';
import Textarea from './Textarea';

const MusicianForm: React.FC<{ musician?: MusicianFormValues }> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MusicianFormValues>();

  const onSubmit: SubmitHandler<MusicianFormValues> = async (data) => {
    console.log(data);
  };
  return (
    <form
      className='mt-24 w-full flex flex-col items-center'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label='name'
        placeholder='მუზიკანტის სახელი'
        id='new-musician-name'
        className={`w-64 h-14 border rounded-md text-center`}
        type='text'
        register={register}
        validation={{
          required: '*სახელის ველი არ უნდა იყოს ცარიელი',
          minLength: {
            value: 3,
            message: '*სახელი უნდა შეიცავდეს მინიმუმ 3 სიმბოლოს',
          },
          pattern: {
            value: /^[ა-ჰ]{3,}$/,
            message: '*სახელი უნდა შეიცავდეს მხოლოდ ქართულ ასოებს',
          },
        }}
      />
      <div className='h-9 flex text-[#ec3030] font-ninoMtavruli justify-center items-center'>
        {errors.name && errors.name.message}
      </div>
      <div id='middle-form' className='flex gap-x-8'>
        <Input
          label='instrument'
          placeholder='მუსიკოსის სახელი'
          id='new-musician-instrument'
          className='w-40 h-14 border border-[#143B52] rounded-md text-center invalid:border-[#ec3030]'
          type='text'
          register={register}
          validation={{
            required: '*ინსტრუმრნტის ველი არ უნდა იყოს ცარიელი',
            minLength: {
              value: 3,
              message: '*ისტრუმენტის ველი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს',
            },
            pattern: {
              value: /^[ა-ჰ]{2,}$/,
              message: '*სახელი უნდა შეიცავდეს მხოლოდ ქართულ ასოებს',
            },
          }}
        />
        <Input
          label='orbitLength'
          placeholder='ორბიტის სიგრძე'
          id='new-musician-instrument'
          className='w-40 h-14 border border-[#143B52] rounded-md text-center invalid:border-[#ec3030]'
          type='text'
          register={register}
          validation={{
            required: '*აირჩიე ორბიტის სიგრძე',
            pattern: {
              value: /^[0-9]{1,}$/,
              message: '*ორბიტის სიგრძე უნდა იყოს დადებითი რიცხვი',
            },
          }}
        />
        <Input
          label='color'
          placeholder='ფერი'
          id='new-musician-color'
          className='w-40 h-14 border border-[#143B52] rounded-md text-center invalid:border-[#ec3030]'
          type='text'
          register={register}
          validation={{
            required: '*ფერის ველი არ უნდა იყოს ცარიელი',
            pattern: {
              value: /^#[0-9A-Z]{6}$/,
              message: '*ფერი უნდა იყოს HEX ფორმატის',
            },
          }}
        />
      </div>
      <div className='p-2 flex flex-col text-[#ec3030] font-ninoMtavruli'>
        <p>{errors.instrument && errors.instrument.message}</p>
        <p>{errors.orbitLength && errors.orbitLength.message}</p>
        <p>{errors.color && errors.color.message}</p>
      </div>
      <Textarea
        label='biography'
        placeholder='მუსიკოსის შესახებ'
        id='new-musician-instrument'
        className='w-1/2 h-60 p-3 border border-[#143B52] rounded-md invalid:border-[#ec3030]'
        register={register}
        validation={{
          required: '*ბიოგრაფია არ უნდა იყოს ცარიელი',
          pattern: {
            value: /^[ა-ჰ]{1,}$/,
            message: '*ბიოგრაფია უნდა შეიცავდეს მხოლოდ ქართულ ასოებს',
          },
        }}
      />
      <div className='h-9 flex text-[#ec3030] font-ninoMtavruli justify-center items-center'>
        {errors.biography && errors.biography.message}
      </div>
      <Button
        id='add-musician-btn'
        type='submit'
        className='w-52 h-12 flex justify-center items-center font-ninoMtavruli text-lg text-white bg-[#143B52]'
      >
        დაამატე წევრი
      </Button>
    </form>
  );
};

export default MusicianForm;
