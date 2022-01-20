import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch } from '../../hooks/hooks';
import { postComment } from '../../slices/commentsSlice/actionCreators';
import { emailRegExp } from '../../tools/emailRegExp';
import './CommentForm.css'
import '../../styles/button.css'

type Props = {
  setFormVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const CommentForm: React.FC<Props> = ({ setFormVisible }) => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [nameDirty, setNameDirty] = useState<boolean>(false)
  const [nameError, setNameError] = useState<string>('Name cannot be empty')
  const [emailDirty, setEmailDirty] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<string>('Email cannot be empty')
  const [textDirty, setTextDirty] = useState<boolean>(false)
  const [textError, setTextError] = useState<string>('Text cannot be empty')

  const [formValid, setFormValid] = useState<boolean>(false)

  const { id } = useParams();
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (nameError || textError || emailError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [nameError, textError, emailError])

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (!emailRegExp.test(String(e.target.value).toLowerCase())) {
      setEmailError('Incorrect email')
    } else {
      setEmailError('')
    }
  }

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    if(e.target.value.trim().length) {
      setNameError('')
    } else {
      setNameError('Incorrect name')
    }
  }

  const textHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
    if(e.target.value.trim().length) {
      setTextError('')
    } else {
      setTextError('Enter your text')
    }
  }

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name } = e.target;
    
    switch (name) {
      case 'name': 
          setNameDirty(true)
        break;

      case 'email': 
          setEmailDirty(true)
        break;

        case 'text': 
          setTextDirty(true)
        break;

        default:
          break;
    }
  }

  const addComment = () => {
    dispatch(postComment(id!, name, email, text))
    setName('')
    setEmail('')
    setText('')
    setNameDirty(false)
    setNameError('Name cannot be empty')
    setEmailDirty(false)
    setEmailError('Email cannot be empty')
    setTextDirty(false)
    setTextError('Text cannot be empty')
    setFormValid(false)
    setFormVisible(false)
  }

  return (
    <form 
      action="GET"
      onSubmit={(e) => e.preventDefault()}
      className="form"
    >
      {nameDirty && nameError && <div style={{color: 'red'}}>{nameError}</div>}
      <input
        className="form__input"
        name="name"
        onBlur={blurHandler}
        value={name}
        onChange={nameHandler} 
        type="text"
        required 
        placeholder='Enter your name'/
      >
      
      {emailDirty && emailError && <div style={{color: 'red'}}>{emailError}</div>}
      <input
        className="form__input"
        name="email"
        onBlur={blurHandler}
        value={email}
        onChange={emailHandler}
        type="email"
        required
        placeholder='E-mail'/
      >
        
      {textDirty && textError && <div style={{color: 'red'}}>{textError}</div>}
      <textarea
        className="form__input form__textarea"
        name="text"
        onBlur={blurHandler}
        value={text}
        onChange={textHandler}
        required 
      />

      <button type="button" disabled={!formValid} onClick={addComment} className="button">
        Add comment
      </button>
    </form>
  )
}
