import {Title} from '../sectionTitle'
import {Form} from '../form';

export const Contact = () => {
  return (
    <div className="w-full bg-red-300 pt-20 pb-48 lg:pt-36 lg:pb-60">
      <div className="container lg:grid lg:grid-cols-2">
        <Title
          label="Contact"
          reverse={true}
          className="mb-16 lg:mb-0"
        >
          <span className='inline-block relative z-10 after:underbar after:bg-red-200'>Wanna Hire Me?</span><br />
          <span className='inline-block relative z-10 after:underbar after:bg-red-200'>Got a Question?</span><br />
          <span className='inline-block relative z-10 after:underbar after:bg-red-200'>Let&apos;s Get in Touch!</span>
        </Title>
        <div>
          <Form
            mode="primary"
          />
        </div>
      </div>
    </div>
  )
}

