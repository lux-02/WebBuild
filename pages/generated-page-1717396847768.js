
import React from 'react';
import { Box, Button, Input, FormControl, FormLabel, Text, Link } from '@chakra-ui/react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { useForm } from 'react-hook-form';


const RegistrationForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box className="min-h-screen flex items-center justify-center bg-gray-50">
      <Box className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-md">
        <Text className="text-2xl font-semibold text-center text-gray-800">Sign Up</Text>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              className="focus:ring-blue-500 focus:border-blue-500"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <Text className="text-red-500 text-sm mt-2">{errors.email.message}</Text>}
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              className="focus:ring-blue-500 focus:border-blue-500"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && <Text className="text-red-500 text-sm mt-2">{errors.password.message}</Text>}
          </FormControl>

          <Button type="submit" className="w-full mt-8 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Sign Up</Button>
        </form>

        <Text className="text-center my-4">or</Text>

        <Button
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          leftIcon={<FaGoogle />}
        >
          Sign Up with Google
        </Button>

        <Button
          className="w-full mt-4 bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800"
          leftIcon={<FaFacebook />}
        >
          Sign Up with Facebook
        </Button>

        <Text className="text-center mt-4">
          Already have an account? <Link href="/login" color="blue.500">Login</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default RegistrationForm;

