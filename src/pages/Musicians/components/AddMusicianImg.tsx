import { Close, Member } from 'assets';
import { Button, InfoHeader } from 'components';
import { useRef, useState } from 'react';
import { getCookie } from 'react-use-cookie';
import { addMemberAvatar, updateMemberAvatar } from 'services';
import { fetchMembers, useAppDispatch } from 'store';
import { member } from 'types';

const AddMusicianImg: React.FC<{
  close: () => void;
  musician: member;
}> = (props) => {
  const imageInput = useRef<HTMLInputElement>(null);
  const [fileSelected, setFileSelected] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const token = getCookie('token');
  const dispatch = useAppDispatch();

  const closeModalHandler = () => {
    props.close();
  };
  const uploadImageHandler = () => {
    imageInput.current?.click();
  };
  const fileChangeHandler = () => {
    setFileSelected(true);
  };

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append(
      'image',
      imageInput.current?.files ? imageInput.current?.files[0] : ''
    );
    if (props.musician.avatar) {
      try {
        await updateMemberAvatar({
          id: props.musician.id,
          imageForm: formData,
          token,
        });
        dispatch(fetchMembers());
        props.close();
      } catch (error) {
        setError(
          '*ფაილი არ შეესაბამება ფორმატს png,jpg,jpeg ან აღემატება დასაშვებ ზომას'
        );
      }
    } else {
      try {
        await addMemberAvatar({
          id: props.musician.id,
          imageForm: formData,
          token,
        });
        dispatch(fetchMembers());
        props.close();
      } catch (error) {
        setError(
          '*ფაილი არ შეესაბამება ფორმატს png,jpg,jpeg ან აღემატება დასაშვებ ზომას'
        );
      }
    }
  };

  return (
    <div className='flex flex-col items-center p-4'>
      <Button
        id='close-add-modal-btn'
        onClick={closeModalHandler}
        className='ml-auto'
        type='button'
      >
        <img src={Close} alt='' />
      </Button>
      <InfoHeader>შეცვალე {props.musician.name}ს ავატარი</InfoHeader>
      <img
        src={
          props.musician.avatar && !fileSelected
            ? process.env.REACT_APP_ROOT_URL + props.musician.avatar
            : fileSelected && imageInput.current?.files
            ? URL.createObjectURL(imageInput.current?.files[0])
            : Member
        }
        alt=''
        className='w-56 h-56 rounded-full mt-20 border-2 border-white shadow-[2px_4px_14px_#000000]'
      />
      <div className='mt-3 text-[#ec3030] font-ninoMtavruli w-1/2 h-10 ml-5 flex gap-3'>
        {error}
      </div>
      <input
        placeholder='image'
        id='musician-avatar-input'
        className=''
        type='file'
        onChange={fileChangeHandler}
        hidden={true}
        ref={imageInput}
      />
      {!fileSelected && (
        <Button
          id='img-upload-btn'
          onClick={uploadImageHandler}
          className='w-40 h-10 bg-[#143B52] rounded-md mt-7 font-ninoMtavruli text-white text-lg'
          type='button'
        >
          ატვირთე
        </Button>
      )}
      {fileSelected && (
        <Button
          id='musician-img-sent'
          className='w-40 h-10 bg-[#53C02C] rounded-md mt-7 font-ninoMtavruli text-white text-lg'
          type='button'
          onClick={onSubmit}
        >
          ატვირთე
        </Button>
      )}
    </div>
  );
};

export default AddMusicianImg;
