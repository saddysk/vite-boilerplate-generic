import { AxiosError } from 'axios';
import { ErrorDto } from '@/api/data-contracts';
import { toast } from 'sonner';

export const handleError = (error: AxiosError<ErrorDto>) => {
  const message = error.response.data.message as any;

  if (error.response.status === 422) {
    let errorMessage = message.length > 1 ? 'Following fields are missing: ' : 'This field is missing: ';
    errorMessage = errorMessage + message.map((field) => field.property).join(', ');

    toast.error(errorMessage);
  } else {
    toast.error(message);
    console.error(error);
  }
};
