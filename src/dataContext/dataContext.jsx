import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext({});

export function DataProvider({ children }) {
    const [data, setData] = useState({
        max_schedule_date: '2023-11-08',
        blacklist_dates: ['2023-11-08'],
        ds160_city: 'BRA',
        consulate_id: 54,
        b64_picture: 'string',
        main_applicant: true,
        traveling_to_apply: true,
        security_question_option: 0,
        security_question_response: 'string',
        application_id: 'string',

        //dados pessoais
        name: '',
        last_name: '',
        cpf: '',
        phone_number: '',
        second_phone_number: '',
        email: '',
        second_email: '',

        //outro nome
        other_name: '',
        other_last_name: '',

        //informações marido/esposa
        married_name: '',
        married_last_name: '',
        married_adress: '',
        complement_adress: '',

        //informações divorciado
        exhusband_name: '',
        last_name_exhusband: '',

        //informações viuvo
        widow_name: '',
        widow_last_name: '',

        //União estavel
        companion_name: '',
        companion_last_name: '',
        companion_adress: '',
        complement_companion_adress: '',
        cep_companion: '',

        //informações do pai
        father_name: '',
        father_last_name: '',
        father_birth_date: '2023-11-08',
        father_locating_in_us: true,
        father_us_status: 'S',

        //informações da mãe
        mother_name: '',
        mother_last_name: '',  
        birth_date: '2023-11-08',
        locating_in_us: true,
        us_status: 'S',

        // familiares nos estados unidos
        immediate_relatives_name: '',
        immediate_relatives_last_name: '',         
        locating_in_us: true,
        relationship: 'S',
        us_status: 'S',

        //dados da ocupação 
        entity_name: '',
        entity_address: '',

        //clan
        clan: '',

        //redes sociais
        instagram: '',
        twitter: '',
        linkedin: '',
        facebook: '',

        //carteira de motorista
        cnh: '',

        //local que já trabalho
        worked_name:'',
        office:'',
        worked_adress:'',
        worked_cep: '',
        worked_email: '',

        //formação
        institution_name: '',
        institution_course: '',
        institution_address: '',
        institution_cep: '',
        institution_phone_number: '',
        institution_email: '',

        //Serviço militar
        office_country_service: '',
        rank_country_service: '',
        specialties_country_service: '',

        //Endereço de entrega
        address_delivery: '',
        complement_address_delivery: '',
        address_delivery_cep: '',

        //Endereço de residencia
        home_address: '',
        complement_home_address: '',
        home_cep: '',

        //Informações da viagem
        duration_travel: '',
        hosting_address: '',
        hosting_Cep: '',

        //Informações ponto de contato
          contact_name:'',
          address_contact:'',
          cep_contact: '',
          phone_number_contact:'',
          email_contact: '',
          contact_last_name: '',
        
        //Inforamções de acompanhante
        accompanying_name:'',
        accompanying_last_name:'',
        group_name: '',

        //Informações de quem está pagando
        payer_name:'',
        payer_last_name:'',
        payer_adress: '',
        payer_cep:'',
        payer_phone_number: '',
        payer_email: '',

        //Informações de pasaporte
        passport_number: '',
        other_passport_type: '',
        passport_stolen_number: '',

        //Informações de visto
        visa_number: '',
        
        // motivação de revogação de visto
        reason_visa_revocation: '',



        telecode_name: {
            surname: 'string',
            given_name: 'string',
            full_name: 'string',
        },
        gender: 'M',
        marital_status: 'S',
        spouse: {
            name: {
                surname: 'string',
                given_name: 'string',
                full_name: 'string',
            },
            birth: {
                date: '2023-11-08',
                city: 'string',
                state: 'string',
                country: 'AFGH',
            },
            nationality: '',
            address_type: 'H',
            address: {
                street: 'string',
                complement: 'string',
                city: 'string',
                state: 'string',
                state_acronym: 'string',
                zip_code: 'string',
                country: 'AFGH',
            },
        },
        former_spouses: [
            {
                name: {
                    surname: 'string',
                    given_name: 'string',
                    full_name: 'string',
                },
                birth: {
                    date: '2023-11-08',
                    city: 'string',
                    state: 'string',
                    country: 'AFGH',
                },
                nationality_country: 'AFGH',
                marriage_start_date: '2023-11-08',
                marriage_end_date: '2023-11-08',
                end_marriage_reason: 'string',
                end_marriage_country: 'AFGH',
            },
        ],
        deceased_spouse: {
            name: {
                surname: 'string',
                given_name: 'string',
                full_name: 'string',
            },
            birth: {
                date: '2023-11-08',
                city: 'string',
                state: 'string',
                country: 'AFGH',
            },
            nationality: 'AFGH',
        },
        birth: {
            date: '2023-11-08',
            city: 'string',
            state: 'string',
            country: 'AFGH',
        },
        nationality_country: 'AFGH',
        other_nationality_country: 'AFGH',
        other_nationality_passport: '',
        permanent_resident_other_country: 'AFGH',
        national_identification_number: '',
        us_social_security_number: '',
        us_taxpayer_number: '',
        visa_class: 'B',
        visa_class_specify: 'B1-B2',
        stay: {
            date: '2023-11-08',
            length: 0,
            address: {
                street: 'string',
                complement: 'string',
                city: 'string',
                state: 'AL',
                state_acronym: 'string',
                zip_code: 'string',
                country: 'AFGH',
            },
        },
        entity_paying: {
            entity_type: 'S',
            address: {
                street: 'string',
                complement: 'string',
                city: 'string',
                state: 'string',
                state_acronym: 'string',
                zip_code: 'string',
                country: 'AFGH',
            },
            
            relationship: 'C',
            same_address: true,
           
            org_name: '',
            person_name: {
                surname: 'string',
                given_name: 'string',
                full_name: 'string',
            },
        },
        escorts: [
            {
                name: {
                    surname: 'string',
                    given_name: 'string',
                    full_name: 'string',
                },
                relationship: 'C',
            },
        ],
        group: '',
        us_visits: [
            {
                date: '2023-11-08',
                length_of_stay: 0,
            },
        ],
        old_visa: {
            consulate_id: 54,
            issue_date: '2023-11-08',
            expiration_date: '2023-11-08',
            number: 'string',
            applying_for_same_type: true,
            applying_for_same_country: true,
            ten_printed: true,
            lost_or_stolen: true,
            lost_or_stolen_year: 0,
            lost_or_stolen_reason: 'string',
            revoked: true,
            revoked_reason: 'string',
        },
        us_drivers_license: [
            {
                number: 'string',
                state: 'AL',
            },
        ],
        refused_us_visa: true,
        refused_us_visa_reason: 'string',
        immigrant_petition: true,
        immigrant_petition_reason: 'string',
        address: {
            street: 'string',
            complement: 'string',
            city: 'string',
            state: 'string',
            state_acronym: 'string',
            zip_code: 'string',
            country: 'AFGH',
        },
        mailing_address: {
            street: 'string',
            complement: 'string',
            city: 'string',
            state: 'string',
            state_acronym: 'string',
            zip_code: 'string',
            country: 'AFGH',
        },
        primary_phone_number: '',
        secondary_phone_number: '',
        work_phone_number: '',
        other_phone_numbers: '',
        email_address: '',
        other_email_adresses: '',
        
        passport: {
            document_type: 'R',
            number: 'string',
            custom_document_reason: 'string',
            book_number: 'string',
            country: 'AFGH',
            city: 'string',
            state: 'string',
            issuance_date: '2023-11-08',
            expiration_date: '2023-11-08',
            lost_reason: 'string',
        },
        lost_or_stolen_passports: [
            {
                document_type: 'R',
                number: 'string',
                custom_document_reason: 'string',
                book_number: 'string',
                country: 'AFGH',
                city: 'string',
                state: 'string',
                issuance_date: '2023-11-08',
                expiration_date: '2023-11-08',
                lost_reason: 'string',
            },
        ],
        us_contact: {
            person_name: {
                surname: 'string',
                given_name: 'string',
                full_name: 'string',
            },
            organization_name: 'string',
            relationship: 'R',
            address: {
                street: 'string',
                complement: 'string',
                city: 'string',
                state: 'AL',
                state_acronym: 'string',
                zip_code: 'string',
                country: 'AFGH',
            },
            phone_number: 'string',
            email: 'string',
        },
        
       
       
        
         
        any_other_relative_in_us: true,
        address: '',
        occupation_type: 'A',
        specify_occupation: '',
        phone_number: '',
        start_date: '2023-11-08',
        end_date: '2023-11-08',
        monthly_income: 0,
        description: '',
        occupation_title: '',
        supervisor_name: '',
        supervisor_last_name: '',

        /*primary_occupation: {
            occupation_type: 'A',
            specify_occupation: 'string',
            entity_name: 'string',
            address: {
                street: 'string',
                complement: 'string',
                city: 'string',
                state: 'string',
                state_acronym: 'string',
                zip_code: 'string',
                country: 'AFGH',
            },
            phone_number: 'string',
            start_date: '2023-11-08',
            end_date: '2023-11-08',
            monthly_income: 0,
            description: 'string',
            occupation_title: 'string',
            supervisor_name: {
                surname: 'string',
                given_name: 'string',
                full_name: 'string',
            },
        },*/
        past_jobs: [
            {
                occupation_type: 'A',
                specify_occupation: 'string',
                entity_name: 'string',
                address: {
                    street: 'string',
                    complement: 'string',
                    city: 'string',
                    state: 'string',
                    state_acronym: 'string',
                    zip_code: 'string',
                    country: 'AFGH',
                },
                phone_number: 'string',
                start_date: '2023-11-08',
                end_date: '2023-11-08',
                monthly_income: 0,
                description: 'string',
                occupation_title: 'string',
                supervisor_name: {
                    surname: 'string',
                    given_name: 'string',
                    full_name: 'string',
                },
            },
        ],
        education: [
            {
                occupation_type: 'A',
                specify_occupation: 'string',
                entity_name: 'string',
                address: {
                    street: 'string',
                    complement: 'string',
                    city: 'string',
                    state: 'string',
                    state_acronym: 'string',
                    zip_code: 'string',
                    country: 'AFGH',
                },
                phone_number: 'string',
                start_date: '2023-11-08',
                end_date: '2023-11-08',
                monthly_income: 0,
                description: 'string',
                occupation_title: 'string',
                supervisor_name: {
                    surname: 'string',
                    given_name: 'string',
                    full_name: 'string',
                },
            },
        ],
       
        languages: '',
        visited_countries: ['AFGH'],
        charitable_organizations: ['string'],
        specialized_skills: 'string',
        military_info: [
            {
                country: 'AFGH',
                branch_of_service: 'string',
                rank: 'string',
                specialty: 'string',
                start_date: '2023-11-08',
                end_date: '2023-11-08',
            },
        ],
        special_organization: '',
        security_responses: ['string', null],
       
    });

    console.log(data)
    
    const updateData = (newData) => {
        setData({ ...data, ...newData });
    };

    return (
        <DataContext.Provider value={{ data, updateData }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    return useContext(DataContext);
}
