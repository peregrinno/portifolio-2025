export interface Contact {
  Telefone: string;
  Email: string;
  LinkedIn: string;
  Portfólio: string;
}

export interface ProfessionalProfile {
  Nome: string;
  Cargo: string;
  Especialização: string[];
  Localização: string;
  Resumo: string;
}

export interface Experience {
  Empresa: string;
  Cargo: string;
  Período: string;
  Localização: string;
}

export interface Education {
  Instituição: string;
  Curso?: string;
  Período: string;
}

export interface Profile {
  Contato: Contact;
  Idiomas: Record<string, string>;
  Certificações: string[];
  PrêmiosEHonrarias: string[];
  PerfilProfissional: ProfessionalProfile;
  HabilidadesTécnicas: string[];
  ExperiênciaProfissional: Experience[];
  FormaçãoAcadêmica: Education[];
}