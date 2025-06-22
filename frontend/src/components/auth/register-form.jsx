import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';



function RegisterForm() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    
    const postRegister = async () => {  
    };

    const handleSignupGoogle = async () => {
    }
  return  (
  <Form
    name="basic"
    style={{ width: '100%'}}
    initialValues={{ remember: true }}
    onFinish={postRegister}
    autoComplete="off"
  >
    <h2 className='text-[19px] leading-[16px] font-[400] mb-[14px]'>Enter your email and password to register.</h2>
    <Form.Item
      name="name"
      style={{width: '100%'}} 
      rules={[{ required: true, message: 'Please enter your name!'}]}
    >
      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
    </Form.Item>

    <Form.Item
      name="surname"
      style={{width: '100%'}} 
      rules={[{ required: true, message: 'Please enter your surname!'}]}
    >
      <Input value={surname} onChange={(e) => setSurname(e.target.value)} placeholder='Surname'/>
    </Form.Item>

    <Form.Item
      name="email"
      rules={[{ required: true, message: 'Please enter your email!' }]}
    >
      <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email address'/>
    </Form.Item>

    <Form.Item
      name="password"
      rules={[{ required: true, message: 'Please enter your password!' }]}
    >
      <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
    </Form.Item>

    <Form.Item
      name="password2"
      rules={[{ required: true, message: 'Please enter your password!' }]}
    >
      <Input.Password value={password2} onChange={(e) => setPassword2(e.target.value)}  placeholder='Confirm Password'/>
    </Form.Item>

    <Form.Item label={null}>
      <Button 
        htmlType="submit"
        style={{
          width: '100%',
          backgroundColor: '#7248b9',
          color: 'white',
          border: 'none',
          padding: '16px 0',
          marginBottom: "27px"
        }}
      >
        Register
      </Button>
    </Form.Item>
    <h2 className='text-center text-[#3D3D3D] text-[13px] font-[400] leading-[16px] mb-[27px]'>Already have an account, <Link to={"/login"} className='text-[#6b6bff] cursor-pointer'>login</Link></h2>
    <h2 className='text-center text-[#3D3D3D] text-[13px] font-[400] leading-[16px] mb-[27px]'>Or register with</h2>
    <Button onClick={handleSignupGoogle} className='mb-[20px] flex gap-[10px] items-center border-[#EAEAEA] border-[1px] rounded-[5px] w-full py-[10px] justify-center cursor-pointer'>
      <FaGoogle />
      <span>Continue with Google</span>
    </Button>
    <Button className='mb-[20px] flex gap-[10px] items-center border-[#EAEAEA] border-[1px] rounded-[5px] w-full py-[10px] justify-center cursor-pointer'>
      <FaFacebook />
      <span>Continue with Facebook</span>
    </Button>
  </Form>
)};
export default RegisterForm;