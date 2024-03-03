import React, { useState } from 'react';

export const Templates = () => {
  const options = ['holiday', 'resignation', 'sickleave'];
  const [select, setSelect] = useState('resignation');
  const [name, setName] = useState('john-deo');
  const [company, setCompany] = useState("twitt");
  const [date, setDate] = useState('');
  const [lastDate, setLastDate] = useState('');

  const data = [
    {
      name: "holiday",
      descriptionTemplate: (name, company, select, date, lastDate) => `Hi ${name},

        Please accept this email as my formal request for ${select} from ${company}. I have taken this decision as 
        I have got a different/better work opportunity and would like to pursue my career in the same.
        
        Request you to consider my letter of ${select} effective from ${date}. I understand that as per the policy 
        I am required to serve a notice period of 60 days and my last working day accordingly shall be ${lastDate}.
        
        I would request you to consider if an early release is possible. I am grateful to ${company} 
        and looking forward to your support.
        
        
        Thanks and Regards,
        ${name}`,
    },
    {
      name: "resignation",
      descriptionTemplate: (name, company, select, date, lastDate) => `Hi ${name},

        Please accept this email as my formal resignation from ${company}. I have taken this decision as 
        I have got a different/better work opportunity and would like to pursue my career in the same.
        
        Request you to consider my letter of ${select} effective from ${date}. I understand that as per the policy 
        I am required to serve a notice period of 60 days and my last working day accordingly shall be ${lastDate}.
        
        I would request you to consider if an early release is possible. I am grateful to ${company} 
        and looking forward to your support.
        
        
        Thanks and Regards,
        ${name}`,
    },
    {
      name: "sickleave",
      descriptionTemplate: (name, company, select, date, lastDate) => `Hi ${name},

        Please accept this email as my formal request for ${select} from ${company}. I am unwell and unable to come to work.
        
        Request you to consider my letter of ${select} effective from ${date}. I understand that... (modify for sick leave policy)
        
        Thanks and Regards,
        ${name}`,
    }
  ];

  const selectHandler = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div>
      <select value={select} onChange={selectHandler}>
        {options.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      <input onInput={(e) => setName(e.target.value)} placeholder="Enter Name"></input>
      <input onInput={(e) => setCompany(e.target.value)} placeholder="Enter Company"></input>
      <input type='date' onChange={(e) => setDate(e.target.value)}></input>
      <input type="date" onChange={(e) => setLastDate(e.target.value)}></input>
      <div>
        <p>Description:</p>
        <p>
          {data.find(item => item.name === select).descriptionTemplate(name, company, select, date, lastDate)}
        </p>
      </div>
    </div>
  );
};
