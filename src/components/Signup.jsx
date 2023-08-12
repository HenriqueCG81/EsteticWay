import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Formato de e-mail inválido')
    .required('E-mail é obrigatório'),
  password: Yup.string()
    .required('Senha é obrigatório')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
      'Deve conter pelo menos 8 caracteres, uma maiúscula, uma minúscula, um número e um caractere especial'
    ),
  passwordConfirmation: Yup.string()
    .required('Confirmação da senha é obrigatório')
    .oneOf([Yup.ref('password'), null], 'As senhas precisam ser iguais')
});

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = data => console.log(data);

  return (
    <div className="backcolor">
      <Container>
        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email..."
              {...register('email')}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite sua senha..."
              {...register('password')}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formGroupPasswordConfirmation"
          >
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Confirme sua senha..."
              {...register('passwordConfirmation')}
              isInvalid={!!errors.passwordConfirmation}
            />
            <Form.Control.Feedback type="invalid">
              {errors.passwordConfirmation?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-grid my-5">
            <Button variant="primary" size="lg" type="submit">
              Register
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Signup;
