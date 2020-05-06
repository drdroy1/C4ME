const util = require('util')

var allMajors = `African Studies
American/United States Studies/Civilization
Ancient/Classical Greek Language and Literature
Anthropology
Architecture
Art History, Criticism and Conservation
Asian Studies/Civilization
Astronomy
Astrophysics
Biochemistry
Biology/Biological Sciences, General
Chemistry, General
Classics and Classical Languages, Literatures, and Linguistics, General
Comparative Literature
Computer and Information Sciences, General
Dance, General
Drama and Dramatics/Theatre Arts, General
Economics, General
Education, General
English Language and Literature, General
Environmental Biology
Environmental Science
European Studies/Civilization
Film/Cinema/Video Studies
French Language and Literature
French StudiesGerman Language and Literature
German Studies
History, General
Italian Language and Literature
Jewish/Judaic Studies
Latin American Studies
Latin Language and Literature
Mathematics, General
Medieval and Renaissance Studies
Multi-/Interdisciplinary Studies, General
Music, General
Neuroscience
Philosophy
Physics, General
Political Science and Government, General
Psychology, General
Religion/Religious Studies
Russian Language and Literature
Slavic Studies
Sociology
Spanish Language and Literature
Statistics, General
Urban Studies/Affairs
Visual and Performing Arts, General
Women's StudiesAccounting
African-American/Black Studies
American/United States Studies/Civilization
Anthropology
Applied Mathematics, General
Arabic Language and Literature
Art History, Criticism and Conservation
Asian Studies/Civilization
Biochemistry
Biology/Biological Sciences, General
Business Administration and Management, General
Business, Management, Marketing, and Related Support Services, Other
Chemistry, General
Cinematography and Film/Video Production
Computational Science
Computer and Information Sciences, General
Criminal Justice/Safety Studies
Dance, General
Design and Visual Communications, General
Drama and Dramatics/Theatre Arts, General
Econometrics and Quantitative Economics
Economics, General
Elementary Education and Teaching
Environmental Science
Environmental Studies
Ethnic, Cultural Minority, Gender, and Group Studies, Other
Finance, General
Financial Mathematics
Fine/Studio Arts, General
French Language and Literature
French Studies
General Literature
German Language and Literature
German Studies
Graphic Design
History, General
International Public Health/International HealthInternational Relations and Affairs
Jewish/Judaic Studies
Journalism
Latin American Studies
Legal Studies, General
Liberal Arts and Sciences/Liberal Studies
Mass Communication/Media Studies
Mathematics, General
Multi-/Interdisciplinary Studies, Other
Music History, Literature, and Theory
Music Technology
Music, General
Musical Theatre
Near and Middle Eastern Studies
Neuroscience
Philosophy
Physics, General
Political Science and Government, General
Pre-Dentistry Studies
Pre-Medicine/Pre-Medical Studies
Pre-Veterinary Studies
Psychology, General
Public Health Education and Promotion
Public Health, General
Recording Arts Technology/Technician
Religion/Religious Studies
Russian Language and Literature
Russian Studies
Secondary Education and Teaching
Social Sciences, General
Sociology
Spanish Language and Literature
Speech Communication and Rhetoric
Statistics, General
Teaching English as a Second or Foreign Language/ESL Language Instructor
Women's StudiesAccounting
Art Teacher Education
Art/Art Studies, General
Biochemistry
Biology/Biological Sciences, General
Business Administration and Management, General
Business/Managerial Economics
Chemistry, General
Communication, Journalism, and Related Programs, Other
Creative Writing
Early Childhood Education and Teaching
Engineering Technology, General
English Language and Literature, General
Environmental Science
Finance, General
French Language and Literature
German Language and Literature
History, General
International Business/Trade/Commerce
International Relations and Affairs
Junior High/Intermediate/Middle School Education and Teaching
Kinesiology and Exercise Science
Marketing/Marketing Management, GeneralMathematics Teacher Education
Mathematics, General
Mathematics, Other
Multi-/Interdisciplinary Studies, General
Multi-/Interdisciplinary Studies, Other
Music Management
Music Teacher Education
Music, General
Philosophy and Religious Studies, General
Philosophy and Religious Studies, Other
Physics, General
Physics, Other
Political Science and Government, General
Pre-Nursing Studies
Psychology, General
Registered Nursing/Registered Nurse
Secondary Education and Teaching
Social Sciences, General
Spanish Language and Literature
Sport and Fitness Administration/Management
Sustainability Studies
Theatre/Theatre Arts Management
Zoology/Animal BiologyAccounting
African-American/Black Studies
Agricultural Business and Management, General
Agricultural Teacher Education
Agronomy and Crop Science
Animal Physiology
Animal Sciences, General
Anthropology
Art/Art Studies, General
Audiology/Audiologist and Speech-Language Pathology/Pathologist
Biological and Physical Sciences
Biology/Biological Sciences, General
Business Administration and Management, General
Cell/Cellular Biology and Histology
Chemistry, General
Child Development
Civil Engineering, General
Cognitive Science
Commercial and Advertising Art
Communication Sciences and Disorders, General
Computer Engineering, General
Computer Science
Computer and Information Sciences, General
Construction Engineering Technology/Technician
Construction Management
Criminal Justice/Safety Studies
Criminology
Dance, General
Dietetics/Dietitian
Drama and Dramatics/Theatre Arts, General
Ecology
Economics, General
Electrical and Electronics Engineering
English Language and Literature, General
Environmental Science
Family and Consumer Economics and Related Services, Other
Finance, General
Foods, Nutrition, and Wellness Studies, General
French Language and Literature
Geography
Geology/Earth Science, General
Graphic Design
Health Professions and Related Clinical Sciences, Other
Hispanic-American, Puerto Rican, and Mexican-American/Chicano StudiesHistory, General
Horticultural Science
Human Resources Management/Personnel Administration, General
Industrial Technology/Technician
Interior Design
International Business/Trade/Commerce
Journalism
Liberal Arts and Sciences/Liberal Studies
Linguistics
Management Information Systems, General
Marketing/Marketing Management, General
Mass Communication/Media Studies
Mathematics, General
Mechanical Engineering
Molecular Biology
Music Teacher Education
Music, General
Natural Sciences
Occupational Health and Industrial Hygiene
Occupational Safety and Health Technology/Technician
Ornamental Horticulture
Parks, Recreation and Leisure Facilities Management, General
Parks, Recreation and Leisure Studies
Philosophy
Physical Education Teaching and Coaching
Physical Therapy/Therapist
Physics, General
Plant Sciences, General
Political Science and Government, General
Pre-Law Studies
Psychology, General
Public Administration
Public Relations/Image Management
Radio and Television
Real Estate
Registered Nursing/Registered Nurse
Religion/Religious Studies
Rhetoric and Composition
Social Work
Sociology
Spanish Language and Literature
Speech Communication and Rhetoric
Women's StudiesAnthropology
Art History, Criticism and Conservation
Art/Art Studies, General
Audiology/Audiologist and Speech-Language Pathology/Pathologist
Biochemistry
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Communication Sciences and Disorders, General
Computer Engineering, General
Computer Science
Construction Management
Criminal Justice/Law Enforcement Administration
Criminal Justice/Police Science
Dance, General
Drama and Dramatics/Theatre Arts, General
Economics, General
English Language and Literature, General
Environmental Science
Environmental Studies
Ethnic, Cultural Minority, Gender, and Group Studies, Other
Fine/Studio Arts, General
French Language and Literature
GeographyGeology/Earth Science, General
Health Professions and Related Clinical Sciences, Other
Health and Physical Education/Fitness, General
History, General
Hospitality Administration/Management, Other
Human Development and Family Studies, General
Industrial Engineering
International Relations and Affairs
Kinesiology and Exercise Science
Liberal Arts and Sciences/Liberal Studies
Mass Communication/Media Studies
Mathematics, General
Multi-/Interdisciplinary Studies, General
Multi-/Interdisciplinary Studies, Other
Music, General
Parks, Recreation and Leisure Studies
Philosophy
Physics, General
Political Science and Government, General
Psychology, General
Sociology
Spanish Language and Literature
Speech Communication and Rhetoric
Statistics, GeneralArt/Art Studies, General
Biology/Biological Sciences, General
Business Administration and Management, General
Computer and Information Sciences, Other
Design and Visual Communications, General
Environmental Science
Environmental Studies
Health and Physical Education/Fitness, General
Human Services, General
Humanities/Humanistic Studies
International Relations and Affairs
Japanese Language and LiteratureLiberal Arts and Sciences/Liberal Studies
Linguistics
Marine Sciences
Mathematics, General
Multi-/Interdisciplinary Studies, Other
Music, General
Psychology, General
Radio and Television
Registered Nursing/Registered Nurse
Social Sciences, General
Spanish Language and LiteratureAccounting
Accounting and Business/Management
Accounting and Finance
Acting
Advertising
Army JROTC/ROTC
Art/Art Studies, General
Athletic Training/Trainer
Biochemistry
Biology Teacher Education
Biology/Biological Sciences, General
Broadcast Journalism
Business Administration and Management, General
Business/Commerce, General
Chemistry, General
Commercial and Advertising Art
Communication and Media Studies, Other
Computer and Information Sciences, General
Computer and Information Sciences, Other
Criminal Justice/Law Enforcement Administration
Directing and Theatrical Production
Divinity/Ministry
Drama and Dramatics/Theatre Arts, General
Economics, General
Education, General
Education, Other
Educational Leadership and Administration, General
Elementary Education and Teaching
Elementary and Middle School Administration/Principalship
English Language and Literature, General
Family and Consumer Sciences/Home Economics Teacher Education
Family and Consumer Sciences/Human Sciences, General
Fine/Studio Arts, General
Foreign Languages and Literatures, General
French Language and Literature
General Studies
Graphic Design
Health and Physical Education/Fitness, General
Health and Physical Education/Fitness, Other
History Teacher Education
History, GeneralInformation Technology
International Business/Trade/Commerce
International Relations and Affairs
Journalism
Junior High/Intermediate/Middle School Education and Teaching
Keyboard Instruments
Kinesiology and Exercise Science
Marketing/Marketing Management, General
Mass Communication/Media Studies
Mathematics Teacher Education
Mathematics, General
Music Pedagogy
Music Performance, General
Music Teacher Education
Music Theory and Composition
Music, General
Pharmacy, Pharmaceutical Sciences, and Administration, Other
Physical Education Teaching and Coaching
Political Science and Government, General
Pre-Dentistry Studies
Pre-Law Studies
Pre-Medicine/Pre-Medical Studies
Pre-Pharmacy Studies
Pre-Veterinary Studies
Psychology, General
Public Administration
Public Relations, Advertising, and Applied Communication, Other
Radio, Television, and Digital Communication, Other
Religion/Religious Studies, Other
Science Teacher Education/General Science Teacher Education
Secondary Education and Teaching
Social Sciences, General
Social Studies Teacher Education
Social Work
Spanish Language Teacher Education
Spanish Language and Literature
Speech Communication and Rhetoric
Sport and Fitness Administration/Management
Teacher Education, Multiple Levels
Teaching French as a Second or Foreign Language
Theatre/Theatre Arts ManagementActuarial Science
Applied and Professional Ethics
Architectural and Building Sciences/Technology
Architecture
Art/Art Studies, General
Astrophysics
Biology/Biological Sciences, General
Biometry/Biometrics
Biopsychology
Business Administration and Management, General
Business Administration, Management and Operations, Other
Chemical Engineering
Chemistry, General
Chemistry, Other
Civil Engineering, General
Cognitive Science
Computational Mathematics
Computer Science
Computer and Information Sciences, Other
Creative Writing
Design and Applied Arts, Other
Design and Visual Communications, General
Drama and Dramatics/Theatre Arts, General
Econometrics and Quantitative Economics
Economics, General
Electrical and Electronics Engineering
Electrical, Electronic and Communications Engineering Technology/Technician
English Language and Literature, General
Entrepreneurship/Entrepreneurial Studies
Finance, General
Financial Mathematics
History, OtherIndustrial and Product Design
International Business/Trade/Commerce
International Relations and Affairs
International/Global Studies
Liberal Arts and Sciences/Liberal Studies
Linguistics
Logic
Marketing/Marketing Management, General
Materials Science
Mathematical Statistics and Probability
Mathematics and Statistics, Other
Mathematics, General
Mathematics, Other
Mechanical Engineering
Music Performance, General
Music Technology
Music Theory and Composition
Music, Other
Neurobiology and Neurosciences, Other
Neuroscience
Operations Management and Supervision
Philosophy
Physics, General
Professional, Technical, Business, and Scientific Writing
Psychology, General
Public Policy Analysis, General
Science, Technology and Society
Statistics, General
Stringed Instruments
Systems Science and Theory
Theoretical and Mathematical Physics
Voice and OperaAccounting
Anthropology
Art Teacher Education
Art/Art Studies, General
Athletic Training/Trainer
Biochemistry
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Civil Engineering, General
Computer Engineering Technology/Technician
Computer and Information Sciences, General
Computer and Information Systems Security/Information Assurance
Construction Management
Criminology
Design and Visual Communications, General
Drama and Dance Teacher Education
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
Economics, General
Electrical, Electronic and Communications Engineering Technology/Technician
Elementary Education and Teaching
English Language and Literature, General
Finance, General
French Language and Literature
Geography
Geology/Earth Science, General
German Language and Literature
History, General
Hospitality Administration/Management, General
Industrial Technology/Technician
International/Global StudiesItalian Language and Literature
Journalism
Kindergarten/Preschool Education and Teaching
Kinesiology and Exercise Science
Management Information Systems, General
Manufacturing Engineering Technology/Technician
Marketing/Marketing Management, General
Mass Communication/Media Studies
Mathematics, General
Mechanical Engineering
Mechanical Engineering/Mechanical Technology/Technician
Molecular Biology
Multi-/Interdisciplinary Studies, Other
Music Teacher Education
Music, General
Network and System Administration/Administrator
Operations Management and Supervision
Philosophy
Physical Education Teaching and Coaching
Physics, General
Political Science and Government, General
Psychology, General
Public Relations, Advertising, and Applied Communication
Registered Nursing/Registered Nurse
Robotics Technology/Technician
Social Sciences, General
Social Work
Sociology
Spanish Language and Literature
Technology Teacher Education/Industrial Arts Teacher Education
Web Page, Digital/Multimedia and Information Resources DesignArt History, Criticism and Conservation
Biochemistry and Molecular Biology
Biology/Biological Sciences, General
Chemical Physics
Chemistry, General
Classics and Classical Languages, Literatures, and Linguistics, General
Computer Science
Drama and Dramatics/Theatre Arts, General
Economics, General
Economics, Other
English Language and Literature, General
Environmental Studies
Fine/Studio Arts, General
French Language and LiteratureGerman Language and Literature
History, General
International/Global Studies
Liberal Arts and Sciences, General Studies and Humanities, Other
Mathematics, General
Music, General
Philosophy
Physics, General
Physiological Psychology/Psychobiology
Political Science and Government, General
Psychology, General
Religion/Religious Studies
Sociology and Anthropology
Spanish Language and LiteratureAccounting and Finance
Aerospace, Aeronautical and Astronautical/Space Engineering
Applied Mathematics, General
Biology/Biological Sciences, General
Business Administration and Management, General
Chemical Engineering
Chemistry, General
Civil Engineering, General
Computer Engineering, General
Computer Graphics
Computer Science
Computer Software Engineering
Econometrics and Quantitative Economics
Electrical and Electronics Engineering
Engineering, General
Engineering/Industrial Management
Entrepreneurship/Entrepreneurial Studies
Environmental ScienceEnvironmental Toxicology
Environmental/Environmental Health Engineering
History, General
Humanities/Humanistic Studies
Liberal Arts and Sciences/Liberal Studies
Logistics, Materials, and Supply Chain Management
Management Information Systems, General
Mathematics and Computer Science
Mathematics, General
Mechanical Engineering
Molecular Biochemistry
Multi-/Interdisciplinary Studies, Other
Physics, General
Political Science and Government, General
Psychology, General
Social Sciences, General
Sociology
Speech Communication and RhetoricAmerican Indian/Native American Studies
Ancient/Classical Greek Language and Literature
Anthropology
Applied Mathematics, General
Area Studies, Other
Art/Art Studies, General
Asian Studies/Civilization
Astrophysics
Biochemistry
Biology/Biological Sciences, General
Chemistry, General
Chinese Language and Literature
Classical, Ancient Mediterranean and Near Eastern Studies and Archaeology
Classics and Classical Languages, Literatures, and Linguistics, General
Computer Science
Drama and Dramatics/Theatre Arts, General
Econometrics and Quantitative Economics
Economics, General
Education, General
English Language and Literature, General
Environmental Science
Environmental Studies
Film/Cinema/Video Studies
French Language and Literature
Geography
Geology/Earth Science, General
German Language and LiteratureHistory, General
Humanities/Humanistic Studies
International Relations and Affairs
Japanese Language and Literature
Latin American Studies
Latin Language and Literature
Mathematics and Computer Science
Mathematics, General
Molecular Biology
Music, General
Natural Sciences
Near and Middle Eastern Studies
Neuroscience
Peace Studies and Conflict Resolution
Philosophy
Philosophy and Religious Studies, General
Physical Sciences
Physics, General
Political Science and Government, General
Psychology, General
Religion/Religious Studies
Research and Experimental Psychology, Other
Russian, Central European, East European and Eurasian Studies
Social Sciences, General
Sociology
Spanish Language and Literature
Women's StudiesAnthropology
Art History, Criticism and Conservation
Asian Studies/Civilization
Biochemistry
Cell/Cellular and Molecular Biology
Chemistry, General
Classics and Classical Languages, Literatures, and Linguistics, General
Comparative Literature
Computer and Information Sciences, Other
Creative Writing
Dance, General
Drama and Dramatics/Theatre Arts, General
Ecology and Evolutionary Biology
Econometrics and Quantitative Economics
Economics, General
Economics, Other
Education, General
English Language and Literature, General
Environmental Science
Environmental Studies
Ethnic, Cultural Minority, Gender, and Group Studies, Other
Film/Cinema/Video Studies
Fine/Studio Arts, General
French Language and Literature
French StudiesGeology/Earth Science, General
German Language and Literature
Hispanic-American, Puerto Rican, and Mexican-American/Chicano Studies
History, General
International Economics
Italian Language and Literature
Italian Studies
Liberal Arts and Sciences, General Studies and Humanities, Other
Mathematics and Computer Science
Mathematics, General
Multi-/Interdisciplinary Studies, Other
Museology/Museum Studies
Music, General
Neuroscience
Philosophy
Physics, General
Political Science and Government, General
Psychology, General
Regional Studies (U.S., Canadian, Foreign)
Religion/Religious Studies
Russian Studies
Sociology
Spanish Language and Literature
Women's StudiesAccounting
Acting
Actuarial Science
African-American/Black Studies
American/United States Studies/Civilization
Animation, Interactive Technology, Video Graphics and Special Effects
Anthropology
Arabic Language and Literature
Architectural History and Criticism, General
Art History, Criticism and Conservation
Art Teacher Education
Art/Art Studies, General
Biochemistry
Biology/Biological Sciences, General
Business Administration and Management, General
Business/Managerial Economics
Chemistry, General
Chinese Studies
Cinematography and Film/Video Production
Clinical Laboratory Science/Medical Technology/Technologist
Communication and Media Studies, Other
Communication, General
Computer Graphics
Computer Programming, Specific Applications
Computer Programming/Programmer, General
Computer Science
Computer Software and Media Applications, Other
Computer Systems Networking and Telecommunications
Computer and Information Sciences and Support Services, Other
Computer and Information Systems Security/Information Assurance
Criminology
Drama and Dramatics/Theatre Arts, General
Dramatic/Theatre Arts and Stagecraft, Other
Early Childhood Education and Teaching
East Asian Studies
Economics, General
Education, Other
Elementary Education and Teaching
English Language and Literature, General
Environmental Science
Finance, General
Fine and Studio Arts Management
Foreign Language Teacher Education
French Language and Literature
Game and Interactive Media Design
General Studies
Geographic Information Science and Cartography
Geography
German Language and Literature
Graphic Design
Health Professions and Related Clinical Sciences, OtherHealth Services/Allied Health/Health Sciences, General
History, General
Hospitality Administration/Management, General
Information Science/Studies
Information Technology
International Relations and Affairs
International and Intercultural Communication
Islamic Studies
Italian Language and Literature
Jazz/Jazz Studies
Journalism
Junior High/Intermediate/Middle School Education and Teaching
Kinesiology and Exercise Science
Latin American Studies
Management Information Systems, General
Management Science
Marketing/Marketing Management, General
Mass Communication/Media Studies
Mathematics and Computer Science
Mathematics, General
Music Management
Music Performance, General
Music Teacher Education
Music Theory and Composition
Music, General
Music, Other
Neuroscience
Organizational Communication, General
Peace Studies and Conflict Resolution
Philosophy
Physical Education Teaching and Coaching
Physics, General
Playwriting and Screenwriting
Political Science and Government, General
Psychology, General
Public Policy Analysis, General
Public Relations, Advertising, and Applied Communication, Other
Real Estate
Registered Nursing/Registered Nurse
Religion/Religious Studies
Rhetoric and Composition
Secondary Education and Teaching
Sociology
Spanish Language and Literature
Special Education and Teaching, General
Speech Communication and Rhetoric
Teacher Education, Multiple Levels
Technical Theatre/Theatre Design and Technology
Theatre Literature, History and Criticism
Women's StudiesAfrican-American/Black Studies
Ancient/Classical Greek Language and Literature
Anthropology
Art History, Criticism and Conservation
Athletic Training/Trainer
Biochemistry
Biology/Biological Sciences, General
Chemistry, General
Classics and Classical Languages, Literatures, and Linguistics, General
Computer Science
Drama and Dramatics/Theatre Arts, General
East Asian Studies
Economics, General
English Language and Literature, General
Environmental Studies
Fine/Studio Arts, General
French Language and Literature
Geology/Earth Science, General
German Language and Literature
History, General
Kinesiology and Exercise Science
Latin Language and LiteratureMass Communication/Media Studies
Mathematics, General
Multi-/Interdisciplinary Studies, General
Multi-/Interdisciplinary Studies, Other
Music Management
Music Performance, General
Music Teacher Education
Music Theory and Composition
Music, General
Peace Studies and Conflict Resolution
Philosophy
Physical Education Teaching and Coaching
Physics, General
Political Science and Government, General
Psychology, General
Religion/Religious Studies
Romance Languages, Literatures, and Linguistics, General
Russian Studies
Sociology
Spanish Language and Literature
Women's Studies
Writing, GeneralAccounting
Accounting and Finance
Acting
Actuarial Science
Advertising
Anthropology
Art History, Criticism and Conservation
Art/Art Studies, General
Astronomy
Biochemistry
Biology/Biological Sciences, General
Broadcast Journalism
Business Administration and Management, General
Business/Commerce, General
Chemistry, General
Commercial and Advertising Art
Computer Science
Directing and Theatrical Production
Drama and Dramatics/Theatre Arts, General
Dramatic/Theatre Arts and Stagecraft, Other
Drawing
Elementary Education and Teaching
English Language and Literature, General
Environmental Science
Environmental Studies
Ethics
Finance, General
Fine/Studio Arts, General
Graphic Design
History, General
International Business/Trade/Commerce
International Relations and Affairs
Jazz/Jazz Studies
JournalismKeyboard Instruments
Management Science
Marketing/Marketing Management, General
Mass Communication/Media Studies
Mathematics, General
Music Management
Music Performance, General
Music Teacher Education
Music, General
Neuroscience
Painting
Pharmacy
Pharmacy Administration and Pharmacy Policy and Regulatory Affairs
Philosophy
Physics, General
Political Science and Government, General
Pre-Dentistry Studies
Pre-Engineering
Pre-Law Studies
Pre-Medicine/Pre-Medical Studies
Pre-Veterinary Studies
Printmaking
Psychology, General
Public Relations/Image Management
Radio and Television
Radio, Television, and Digital Communication, Other
Religion/Religious Studies
Religious/Sacred Music
Rhetoric and Composition
Sculpture
Secondary Education and Teaching
Sociology
Voice and OperaAccounting
Anthropology
Applied and Professional Ethics
Architectural Engineering
Architecture
Arts, Entertainment, and Media Management, General
Bioengineering and Biomedical Engineering
Biological and Physical Sciences
Biology/Biological Sciences, General
Business/Commerce, General
Chemical Engineering
Chemistry, General
Cinematography and Film/Video Production
Civil Engineering, General
Communication, Journalism, and Related Programs, Other
Computer Engineering, General
Computer Science
Computer Software Engineering
Computer and Information Systems Security/Information Assurance
Construction Management
Criminal Justice/Law Enforcement Administration
Criminology
Culinary Arts/Chef Training
Customer Service Management
Dance, Other
Design and Applied Arts, Other
Econometrics and Quantitative Economics
Economics, General
Electrical and Electronics Engineering
Elementary Education and Teaching
Engineering Technology, General
Engineering, General
English Language and Literature/Letters, Other
Entrepreneurship/Entrepreneurial Studies
Environmental Science
Environmental Studies
Environmental/Environmental Health Engineering
Fashion/Apparel Design
Finance, General
Game and Interactive Media DesignGeneral Studies
Geology/Earth Science, General
Graphic Design
Health/Health Care Administration/Management
History, General
Hotel/Motel Administration/Management
Humanities/Humanistic Studies
Industrial and Product Design
Informatics
Information Science/Studies
Interior Design
International Business/Trade/Commerce
International/Global Studies
Legal Professions and Studies, Other
Liberal Arts and Sciences, General Studies and Humanities, Other
Liberal Arts and Sciences/Liberal Studies
Management Information Systems, General
Marketing/Marketing Management, General
Materials Engineering
Mathematics, General
Mechanical Engineering
Multi-/Interdisciplinary Studies, General
Music Management
Nutrition Sciences
Operations Management and Supervision
Philosophy
Photography
Physics, Other
Playwriting and Screenwriting
Political Science and Government, General
Psychology, General
Public Health, General
Real Estate
Registered Nursing/Registered Nurse
Secondary Education and Teaching
Sociology
Sport and Fitness Administration/Management
Substance Abuse/Addiction Counseling
Visual and Performing Arts, General
Web Page, Digital/Multimedia and Information Resources DesignAccounting
Adult and Continuing Education and Teaching
African-American/Black Studies
Art/Art Studies, General
Athletic Training/Trainer
Biology/Biological Sciences, General
Biotechnology
Business Administration and Management, General
Chemistry, General
Clinical Laboratory Science/Medical Technology/Technologist
Communication Sciences and Disorders, General
Communication, General
Computer Science
Computer and Information Sciences, Other
Construction Management
Criminal Justice/Police Science
Digital Communication and Media/Multimedia
Drama and Dramatics/Theatre Arts, General
Economics, General
Elementary Education and Teaching
Engineering Technology, General
Engineering, Other
English Language and Literature, General
Family and Consumer Sciences/Human Sciences, General
Finance, General
Foreign Languages and Literatures, General
Geography
Geology/Earth Science, General
Health CommunicationHealth Teacher Education
Health/Health Care Administration/Management
History, General
Industrial Technology/Technician
Journalism
Junior High/Intermediate/Middle School Education and Teaching
Kindergarten/Preschool Education and Teaching
Kinesiology and Exercise Science
Liberal Arts and Sciences/Liberal Studies
Management Science
Marketing/Marketing Management, General
Mathematics and Computer Science
Mathematics, General
Multi-/Interdisciplinary Studies, Other
Music, General
Neuroscience
Parks, Recreation and Leisure Facilities Management, General
Philosophy
Physics, General
Political Science and Government, General
Psychology, General
Public Relations/Image Management
Registered Nursing/Registered Nurse
Science Teacher Education/General Science Teacher Education
Social Science Teacher Education
Sociology
Special Education and Teaching, General
Sport and Fitness Administration/Management
Technical Teacher EducationAccounting
Adult and Continuing Education and Teaching
Anthropology
Art History, Criticism and Conservation
Art Teacher Education
Athletic Training/Trainer
Biology Teacher Education
Biology/Biological Sciences, General
Business Administration and Management, General
Business Teacher Education
Business/Managerial Economics
Chemistry Teacher Education
Chemistry, General
Child Development
Cinematography and Film/Video Production
City/Urban, Community and Regional Planning
Community Health Services/Liaison/Counseling
Computer and Information Sciences, General
Counseling Psychology
Criminology
Curriculum and Instruction
Dental Hygiene/Hygienist
Developmental and Child Psychology
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
Economics, General
Education, General
Education/Teaching of Individuals in Early Childhood Special Education Programs
Educational Leadership and Administration, General
Educational/Instructional Technology
Electrical and Electronics Engineering
Engineering Technologies and Engineering-Related Fields, Other
English Language and Literature, General
English/Language Arts Teacher Education
Environmental Science
Film/Cinema/Video Studies
Finance, General
Fine/Studio Arts, General
French Language Teacher Education
French Language and Literature
Geography
Geology/Earth Science, General
Graphic Communications, General
Graphic Design
Health Information/Medical Records Administration/Administrator
Health Teacher Education
Health and Physical Education/Fitness, GeneralHealth/Health Care Administration/Management
History, General
Human Resources Management/Personnel Administration, General
Humanities/Humanistic Studies
International Relations and Affairs
Journalism
Kinesiology and Exercise Science
Management Information Systems, General
Marketing/Marketing Management, General
Mathematics Teacher Education
Mathematics, General
Mechanical Engineering
Mechanical Engineering/Mechanical Technology/Technician
Multi-/Interdisciplinary Studies, Other
Music Teacher Education
Music, General
Occupational Therapy/Therapist
Parks, Recreation and Leisure Facilities Management, General
Parks, Recreation and Leisure Studies
Philosophy
Physics Teacher Education
Physics, General
Political Science and Government, General
Professional, Technical, Business, and Scientific Writing
Psychology, General
Public Administration
Public Health Education and Promotion
Reading Teacher Education
Registered Nursing/Registered Nurse
School Psychology
Science Teacher Education/General Science Teacher Education
Social Science Teacher Education
Social Studies Teacher Education
Social Work
Social Work, Other
Social and Philosophical Foundations of Education
Sociology
Spanish Language Teacher Education
Spanish Language and Literature
Special Education and Teaching, General
Speech Communication and Rhetoric
Speech-Language Pathology/Pathologist
Teacher Education, Multiple Levels
Teaching English as a Second or Foreign Language/ESL Language Instructor
Therapeutic Recreation/Recreational Therapy
Women's StudiesAccounting
Anthropology
Art/Art Studies, General
Athletic Training/Trainer
Biochemistry
Bioengineering and Biomedical Engineering
Biology/Biological Sciences, General
Biotechnology
Business Administration and Management, General
Chemistry, General
Civil Engineering, General
Clinical Laboratory Science/Medical Technology/Technologist
Community Health and Preventive Medicine
Computer Software Engineering
Computer and Information Sciences, General
Criminal Justice/Safety Studies
Digital Communication and Media/Multimedia
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
Economics, General
Elementary Education and Teaching
English Language and Literature, General
Environmental Studies
Environmental/Environmental Health Engineering
Finance, GeneralForensic Science and Technology
Health Services/Allied Health/Health Sciences, General
History, General
Kinesiology and Exercise Science
Legal Assistant/Paralegal
Liberal Arts and Sciences/Liberal Studies
Marketing/Marketing Management, General
Mass Communication/Media Studies
Mathematics, General
Multi-/Interdisciplinary Studies, General
Music Performance, General
Music Teacher Education
Music Therapy/Therapist
Philosophy
Political Science and Government, General
Psychology, General
Public Health, General
Registered Nursing/Registered Nurse
Resort Management
Secondary Education and Teaching
Social Work
Sociology
Special Education and Teaching, General
Speech Communication and Rhetoric
Water, Wetlands, and Marine Resources ManagementAccounting
Accounting and Finance
African-American/Black Studies
American/United States Studies/Civilization
Ancient Studies/Civilization
Anthropology
Art History, Criticism and Conservation
Biological and Physical Sciences
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Classics and Classical Languages, Literatures, and Linguistics, General
Communication, General
Comparative Literature
Computer and Information Sciences, General
Dance, General
Digital Arts
Digital Communication and Media/Multimedia
Drama and Dramatics/Theatre Arts, General
Economics, General
Engineering Physics/Applied Physics
English Language and Literature, General
Environmental Science
Environmental Studies
Film/Cinema/Video Studies
Finance, General
Fine Arts and Art Studies, Other
French Language and Literature
French Studies
German Language and Literature
German Studies
History, GeneralHumanities/Humanistic Studies
Information Science/Studies
International Business/Trade/Commerce
International Relations and Affairs
Italian Language and Literature
Italian Studies
Journalism
Latin American Studies
Marketing/Marketing Management, General
Mathematics and Statistics, Other
Mathematics, General
Medieval and Renaissance Studies
Multi-/Interdisciplinary Studies, Other
Music, General
Natural Sciences
Near and Middle Eastern Studies
Neuroscience
Philosophy
Physics, General
Political Science and Government, General
Pre-Dentistry Studies
Pre-Law Studies
Pre-Medicine/Pre-Medical Studies
Pre-Veterinary Studies
Psychology, General
Religion/Religious Studies
Social Work
Sociology
Spanish Language and Literature
Spanish and Iberian Studies
Urban Studies/Affairs
Women's StudiesAfrican Studies
American/United States Studies/Civilization
Ancient/Classical Greek Language and Literature
Animal Behavior and Ethology
Anthropology
Art History, Criticism and Conservation
Astronomy
Astrophysics
Biochemistry
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Classics and Classical Languages, Literatures, and Linguistics, General
Computer and Information Sciences, General
Creative Writing
Dance, General
Drama and Dramatics/Theatre Arts, General
Economics, General
English Language and Literature, General
Environmental Science
Environmental StudiesFine/Studio Arts, General
French Language and Literature
Geology/Earth Science, General
German Language and Literature
German Studies
History, General
Italian Language and Literature
Latin Language and Literature
Mathematics, General
Multi-/Interdisciplinary Studies, Other
Music, General
Neuroscience
Philosophy
Physics, General
Political Science and Government, General
Psychology, General
Public Health, Other
Religion/Religious Studies
Sociology
Spanish Language and LiteratureAccounting
Acting
Advertising
Aquatic Biology/Limnology
Area Studies, Other
Biochemistry
Bioengineering and Biomedical Engineering
Bioinformatics
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Clinical Laboratory Science/Medical Technology/Technologist
Computer Programming/Programmer, General
Computer Science
Computer and Information Sciences, General
Criminal Justice/Safety Studies
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
Electrical and Electronics Engineering
English Literature (British and Commonwealth)
Entrepreneurship/Entrepreneurial Studies
Environmental Science
Environmental/Environmental Health Engineering
Finance, General
Foreign Languages and Literatures, General
Forensic Science and Technology
Funeral Service and Mortuary Science, General
Health Professions and Related Clinical Sciences, Other
Health/Health Care Administration/Management
Health/Medical Preparatory Programs, Other
History, General
Industrial EngineeringInsurance
International Business/Trade/Commerce
International/Global Studies
Journalism
Junior High/Intermediate/Middle School Education and Teaching
Kinesiology and Exercise Science
Legal Assistant/Paralegal
Liberal Arts and Sciences/Liberal Studies
Logistics, Materials, and Supply Chain Management
Management Information Systems, General
Marketing/Marketing Management, General
Mathematics, General
Mechanical Engineering
Multi-/Interdisciplinary Studies, Other
Occupational Therapy/Therapist
Philosophy
Physician Assistant
Political Science and Government, General
Psychology, General
Public Health, General
Radio and Television Broadcasting Technology/Technician
Registered Nursing/Registered Nurse
Research and Experimental Psychology, Other
Respiratory Care Therapy/Therapist
Social Studies Teacher Education
Social Work
Sport and Fitness Administration/Management
Teacher Education, Multiple Levels
Technical Theatre/Theatre Design and Technology
Theology/Theological Studies
Visual and Performing Arts, GeneralAfrican-American/Black Studies
American History (United States)
American/United States Studies/Civilization
Ancient/Classical Greek Language and Literature
Anthropology
Area Studies, Other
Art History, Criticism and Conservation
Art/Art Studies, General
Asian History
Biochemistry
Biological and Physical Sciences
Biology/Biological Sciences, General
Broadcast Journalism
Business Administration and Management, General
Business Administration, Management and Operations, Other
Chemistry, General
Chinese Studies
Classics and Classical Languages, Literatures, and Linguistics, General
Comparative Literature
Computer Science
Creative Writing
Drama and Dramatics/Theatre Arts, General
East Asian Studies
Economics, General
Education, General
Elementary Education and Teaching
Engineering, Other
English Language and Literature, General
Environmental Science
Environmental Studies
European History
European Studies/Civilization
Fine/Studio Arts, General
French Language and Literature
German Language and Literature
Health Professions and Related Clinical Sciences, Other
Hispanic-American, Puerto Rican, and Mexican-American/Chicano Studies
History, General
International Business/Trade/Commerce
International Economics
International Relations and AffairsItalian Language and Literature
Japanese Language and Literature
Japanese Studies
Jewish/Judaic Studies
Journalism
Junior High/Intermediate/Middle School Education and Teaching
Latin American Studies
Latin Language and Literature
Liberal Arts and Sciences/Liberal Studies
Marine Biology and Biological Oceanography
Mathematics, General
Modern Languages
Molecular Biology
Multi-/Interdisciplinary Studies, General
Music Teacher Education
Music, General
Non-Profit/Public/Organizational Management
Peace Studies and Conflict Resolution
Philosophy
Physical Education Teaching and Coaching
Physics, General
Political Science and Government, General
Pre-Dentistry Studies
Pre-Law Studies
Pre-Medicine/Pre-Medical Studies
Pre-Nursing Studies
Pre-Pharmacy Studies
Pre-Veterinary Studies
Psychology, General
Religion/Religious Studies
Romance Languages, Literatures, and Linguistics, General
Science Teacher Education/General Science Teacher Education
Secondary Education and Teaching
Social Sciences, General
Social Sciences, Other
Sociology
South Asian Studies
Spanish Language and Literature
Visual and Performing Arts, General
Women's Studies
Writing, GeneralAccounting
Art/Art Studies, General
Biochemistry
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Christian Studies
Computer Science
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
Economics, General
Elementary Education and Teaching
English Language and Literature, General
Exercise Physiology
Finance, General
Fine/Studio Arts, General
Foreign Languages and Literatures, General
French Language and Literature
German Language and LiteratureHistory, General
International Relations and Affairs
Junior High/Intermediate/Middle School Education and Teaching
Linguistics
Mathematics, General
Music Performance, General
Music Teacher Education
Music, General
Parks, Recreation and Leisure Studies
Philosophy
Physics, General
Political Science and Government, General
Psychology, General
Secondary Education and Teaching
Social Work
Sociology
Spanish Language and Literature
Speech Communication and Rhetoric
Youth MinistryAccounting
American/United States Studies/Civilization
Anthropology
Art/Art Studies, General
Biochemistry and Molecular Biology
Biology/Biological Sciences, General
Chemical Physics
Chemistry, General
Classics and Classical Languages, Literatures, and Linguistics, General
Computer Science
Drama and Dramatics/Theatre Arts, General
Economics, General
English Language and Literature, General
Environmental Studies
French Language and LiteratureGerman Language and Literature
Health Services/Allied Health/Health Sciences, General
History, General
International Relations and Affairs
Mathematics, General
Multi-/Interdisciplinary Studies, General
Music, General
Philosophy
Philosophy and Religious Studies, Other
Physics, General
Political Science and Government, General
Psychology, General
Religion/Religious Studies
Sociology
Spanish Language and LiteratureAccounting
Accounting and Business/Management
Art History, Criticism and Conservation
Art Teacher Education
Athletic Training/Trainer
Biochemistry and Molecular Biology
Biology Teacher Education
Biology/Biological Sciences, General
Business Administration and Management, General
Business/Managerial Economics
Chemistry Teacher Education
Chemistry, General
Classics and Classical Languages, Literatures, and Linguistics, General
Computer and Information Sciences, General
Dance, General
Drama and Dance Teacher Education
Drama and Dramatics/Theatre Arts, General
Economics, General
Education/Teaching of Individuals in Early Childhood Special Education Programs
Education/Teaching of Individuals with Emotional Disturbances
Education/Teaching of Individuals with Specific Learning Disabilities
Elementary Education and Teaching
Engineering, General
English Language and Literature, General
English/Language Arts Teacher Education
Fine/Studio Arts, General
French Language Teacher Education
French Language and Literature
Geology/Earth Science, General
German Language Teacher Education
German Language and Literature
History Teacher EducationHistory, General
International/Global Studies
Japanese Studies
Jazz/Jazz Studies
Keyboard Instruments
Kinesiology and Exercise Science
Mathematics Teacher Education
Mathematics, General
Multi-/Interdisciplinary Studies, Other
Music Performance, General
Music Teacher Education
Music Theory and Composition
Music, General
Philosophy
Physical Education Teaching and Coaching
Physics Teacher Education
Physics, General
Political Science and Government, General
Psychology, General
Registered Nursing/Registered Nurse
Religion/Religious Studies
Science Teacher Education/General Science Teacher Education
Social Studies Teacher Education
Social Work
Sociology
Spanish Language Teacher Education
Spanish Language and Literature
Speech Communication and Rhetoric
Stringed Instruments
Voice and Opera
Women's StudiesAccounting
Administrative Assistant and Secretarial Science, General
Aeronautical/Aerospace Engineering Technology/Technician
Aircraft Powerplant Technology/Technician
Anthropology
Art/Art Studies, General
Audiology/Audiologist and Speech-Language Pathology/Pathologist
Autobody/Collision and Repair Technology/Technician
Automobile/Automotive Mechanics Technology/Technician
Biochemistry
Biology/Biological Sciences, General
Business Administration and Management, General
Business/Commerce, General
CAD/CADD Drafting and/or Design Technology/Technician
Chemistry, General
Child Care and Support Services Management
Civil Engineering Technology/Technician
Civil Engineering, General
Clinical Laboratory Science/Medical Technology/Technologist
Computer Science
Computer Systems Networking and Telecommunications
Criminal Justice/Police Science
Critical Infrastructure Protection
Dance, General
Dental Hygiene/Hygienist
Diesel Mechanics Technology/Technician
Dietetics/Dietitian
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
Economics, General
Electrical and Electronics Engineering
Electrical, Electronic and Communications Engineering Technology/Technician
Elementary Education and Teaching
Energy Management and Systems Technology/Technician
English Language and Literature, General
Environmental Science
Family and Consumer Sciences/Human Sciences, General
Finance, General
Fire Science/Fire-fighting
French Language and Literature
General Studies
Geology/Earth Science, General
German Language and Literature
Health Information/Medical Records Technology/Technician
Health Services/Allied Health/Health Sciences, General
Health Teacher EducationHealth/Health Care Administration/Management
History, General
Homeland Security, Law Enforcement, Firefighting and Related Protective Services, Other
Human Resources Management/Personnel Administration, General
Information Science/Studies
Insurance
International Relations and Affairs
Legal Assistant/Paralegal
Machine Tool Technology/Machinist
Manufacturing Engineering Technology/Technician
Marketing/Marketing Management, General
Massage Therapy/Therapeutic Massage
Mathematics, General
Mechanical Engineering
Mechanical Engineering/Mechanical Technology/Technician
Mechanics and Repairers, General
Medical Informatics
Medical Radiologic Technology/Science - Radiation Therapist
Medical/Clinical Assistant
Microbiology, General
Multi-/Interdisciplinary Studies, Other
Music Performance, General
Music Teacher Education
Music, General
Nuclear Engineering
Nuclear Engineering Technology/Technician
Occupational Therapist Assistant
Organizational Communication, General
Philosophy
Physical Education Teaching and Coaching
Physical Therapy Technician/Assistant
Physics, General
Political Science and Government, General
Psychology, General
Registered Nursing/Registered Nurse
Robotics Technology/Technician
Secondary Education and Teaching
Sign Language Interpretation and Translation
Social Work
Sociology
Spanish Language and Literature
Special Education and Teaching, General
Statistics, General
Surveying Technology/Surveying
Welding Technology/WelderAccounting
Art/Art Studies, General
Biology/Biological Sciences, General
Business Administration and Management, General
Business/Managerial Economics
Chemistry, General
Clinical Laboratory Science/Medical Technology/Technologist
Computer Science
Cytotechnology/Cytotechnologist
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
Economics, General
Education, General
Elementary Education and Teaching
English Language and Literature, General
Environmental Studies
Finance, General
French Language and Literature
German Language and Literature
History, General
Information Science/Studies
International Relations and AffairsLiberal Arts and Sciences/Liberal Studies
Management Information Systems, General
Mass Communication/Media Studies
Mathematics, General
Multi-/Interdisciplinary Studies, General
Music, General
Occupational Therapy/Therapist
Philosophy
Physical Education Teaching and Coaching
Physics, General
Political Science and Government, General
Pre-Dentistry Studies
Pre-Law Studies
Pre-Medicine/Pre-Medical Studies
Pre-Veterinary Studies
Psychology, General
Religion/Religious Studies
Rhetoric and Composition
Secondary Education and Teaching
Sociology
Spanish Language and Literature
Teacher Education, Multiple LevelsAfrican-American/Black Studies
American/United States Studies/Civilization
Ancient/Classical Greek Language and Literature
Animal Behavior and Ethology
Anthropology
Apparel and Textiles, General
Art History, Criticism and Conservation
Art Teacher Education
Art/Art Studies, General
Artificial Intelligence
Astronomy
Athletic Training/Trainer
Atmospheric Sciences and Meteorology, Other
Audiology/Audiologist and Speech-Language Pathology/Pathologist
Ballet
Biochemistry
Biological and Biomedical Sciences, Other
Biology Teacher Education
Biology/Biological Sciences, General
Biotechnology
Business/Commerce, General
Chemistry Teacher Education
Chemistry, General
Classics and Classical Languages, Literatures, and Linguistics, General
Cognitive Science
Community Health and Preventive Medicine
Comparative Literature
Computer Science
Criminal Justice/Safety Studies
Dance, General
Design and Visual Communications, General
Digital Communication and Media/Multimedia
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
East Asian Languages, Literatures, and Linguistics, General
East Asian Studies
Economics, General
Education, Other
Elementary Education and Teaching
Engineering, General
English Language and Literature, General
English/Language Arts Teacher Education
Environmental Health
Environmental Science
Environmental Studies
Epidemiology
Ethnic, Cultural Minority, Gender, and Group Studies, Other
Fashion/Apparel Design
Fine and Studio Arts Management
Fine/Studio Arts, General
Folklore Studies
French Language and Literature
Game and Interactive Media Design
Geography
Geology/Earth Science, GeneralGermanic Languages, Literatures, and Linguistics, General
Health Teacher Education
Health and Physical Education/Fitness, General
History, General
Informatics
Interior Design
International Relations and Affairs
International Relations and National Security Studies, Other
Italian Language and Literature
Jewish/Judaic Studies
Journalism
Kinesiology and Exercise Science
Labor Studies
Liberal Arts and Sciences, General Studies and Humanities, Other
Liberal Arts and Sciences/Liberal Studies
Linguistics
Mass Communication/Media Studies
Mathematics Teacher Education
Mathematics, General
Microbiology, General
Middle/Near Eastern and Semitic Languages, Literatures, and Linguistics, General
Multi-/Interdisciplinary Studies, General
Music Performance, General
Music Teacher Education
Music, Other
Musical Theatre
Neuroscience
Organizational Behavior Studies
Parks, Recreation and Leisure Studies
Philosophy
Physics Teacher Education
Physics, General
Political Science and Government, General
Portuguese Language and Literature
Public Administration
Public Health, Other
Recording Arts Technology/Technician
Registered Nursing, Nursing Administration, Nursing Research and Clinical Nursing, Other
Registered Nursing/Registered Nurse
Religion/Religious Studies
Research and Experimental Psychology, Other
Secondary Education and Teaching
Slavic Languages, Literatures, and Linguistics, General
Social Studies Teacher Education
Social Work
Sociology
South Asian Studies
Spanish Language and Literature
Special Education and Teaching, General
Speech Communication and Rhetoric
Statistics, General
Structural Biology
Teacher Education and Professional Development, Specific Subject Areas, Other
Ural-Altaic and Central Asian Studies
Vision Science/Physiological OpticsAccounting
Art History, Criticism and Conservation
Asian Studies/Civilization
Biological and Physical Sciences
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Classics and Classical Languages, Literatures, and Linguistics, General
Comparative Literature
Computer Science
East Asian Studies
Economics, General
Education, General
Elementary Education and Teaching
Engineering Physics/Applied Physics
English Language and Literature, General
Environmental Studies
Finance, General
French Language and Literature
German Language and Literature
Gerontology
History, General
Human Resources Management/Personnel Administration, General
Humanities/Humanistic Studies
International Business/Trade/Commerce
International Economics
International Relations and AffairsKindergarten/Preschool Education and Teaching
Latin Language and Literature
Marketing/Marketing Management, General
Mass Communication/Media Studies
Mathematics, General
Modern Greek Language and Literature
Multi-/Interdisciplinary Studies, General
Neuroscience
Peace Studies and Conflict Resolution
Philosophy
Physical Education Teaching and Coaching
Physics, General
Political Science and Government, General
Pre-Dentistry Studies
Pre-Law Studies
Pre-Medicine/Pre-Medical Studies
Pre-Veterinary Studies
Psychology, General
Public Administration
Religion/Religious Studies
Religious Education
Secondary Education and Teaching
Sociology
Spanish Language and Literature
Special Education and Teaching, General
Teacher Education, Multiple LevelsAccounting
Advertising
Applied Mathematics, General
Audiology/Audiologist and Speech-Language Pathology/Pathologist
Biochemistry
Biology Teacher Education
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Computer Science
Computer Systems Networking and Telecommunications
Computer and Information Systems Security/Information Assurance
Criminal Justice/Law Enforcement Administration
Early Childhood Education and Teaching
Economics, General
Elementary Education and Teaching
English Language and Literature, General
English/Language Arts Teacher Education
Environmental Biology
Environmental Studies
Finance, General
Foreign Language Teacher Education
French Language Teacher Education
French Language and Literature
Health/Health Care Administration/Management
History, GeneralInternational Business/Trade/Commerce
International Relations and Affairs
Italian Language and Literature
Journalism
Liberal Arts and Sciences/Liberal Studies
Management Information Systems, General
Marketing/Marketing Management, General
Mass Communication/Media Studies
Mathematics Teacher Education
Mathematics, General
Mental Health Counseling/Counselor
Philosophy
Physics, General
Political Science and Government, General
Psychology, General
Public Relations/Image Management
Radio and Television
Religion/Religious Studies
Secondary Education and Teaching
Social Studies Teacher Education
Social Work
Sociology
Spanish Language Teacher Education
Spanish Language and Literature
Speech Communication and Rhetoric
Web Page, Digital/Multimedia and Information Resources DesignArt History, Criticism and Conservation
Art/Art Studies, General
Biology/Biological Sciences, General
Business/Commerce, General
Chemistry, General
Classical, Ancient Mediterranean and Near Eastern Studies and Archaeology
Computer and Information Sciences, General
Drama and Dramatics/Theatre Arts, General
East Asian Studies
Economics, General
English Language and Literature, General
Ethnic, Cultural Minority, Gender, and Group Studies, Other
French Language and LiteratureGerman Language and Literature
History, General
International Relations and Affairs
Mathematics, General
Multi-/Interdisciplinary Studies, Other
Music, General
Philosophy
Physics, General
Political Science and Government, General
Psychology, General
Religion/Religious Studies
Social Sciences, Other
Spanish Language and LiteratureAccounting
African Studies
Anthropology
Applied Mathematics, General
Architecture
Art History, Criticism and Conservation
Art Teacher Education
Art/Art Studies, General
Asian Studies/Civilization
Biochemistry
Biology Teacher Education
Biology/Biological Sciences, General
Business Administration and Management, General
Business/Managerial Economics
Chemistry, General
Civil Engineering, General
Communication and Media Studies, Other
Computer Engineering Technology/Technician
Computer Programming, Specific Applications
Computer Science
Computer Software Engineering
Computer and Information Sciences, General
Computer and Information Systems Security/Information Assurance
Construction Engineering
Construction Management
Criminal Justice/Safety Studies
Dance, General
Digital Arts
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
Electrical and Electronics Engineering
Electrical, Electronic and Communications Engineering Technology/Technician
Elementary Education and Teaching
Engineering Technology, General
Engineering/Industrial Management
English Language and Literature, General
English/Language Arts Teacher Education
Entrepreneurship/Entrepreneurial Studies
Environmental Science
Environmental/Environmental Health Engineering
Finance, GeneralForeign Languages, Literatures, and Linguistics, Other
Game and Interactive Media Design
Geographic Information Science and Cartography
Geography
History, General
Human Services, General
Industrial Production Technologies/Technicians, Other
Information Science/Studies
Information Technology
International Business/Trade/Commerce
International Relations and Affairs
Journalism
Junior High/Intermediate/Middle School Education and Teaching
Kinesiology and Exercise Science
Logistics, Materials, and Supply Chain Management
Marketing/Marketing Management, General
Mathematics, General
Mechanical Engineering
Mechanical Engineering/Mechanical Technology/Technician
Multi-/Interdisciplinary Studies, Other
Music Performance, General
Music Teacher Education
Music, General
Philosophy
Physical Education Teaching and Coaching
Physics Teacher Education
Physics, General
Political Science and Government, General
Psychology, General
Public Health Education and Promotion
Public Relations, Advertising, and Applied Communication
Registered Nursing/Registered Nurse
Restaurant/Food Services Management
Sales, Distribution, and Marketing Operations, General
Social Studies Teacher Education
Sociology
Speech Communication and Rhetoric
Sport and Fitness Administration/Management
Surveying Technology/Surveying
Systems Engineering
Visual and Performing Arts, GeneralAccounting
Animation, Interactive Technology, Video Graphics and Special Effects
Architectural Engineering
Architectural and Building Sciences/Technology
Biochemistry
Bioengineering and Biomedical Engineering
Business Administration and Management, General
Chemistry, General
Civil Engineering, General
Computer Engineering, General
Computer Science
Computer Software Engineering
Construction Management
Design and Visual Communications, General
Digital Communication and Media/Multimedia
Electrical and Electronics Engineering
Engineering Technology, General
English Language and Literature, General
Environmental ChemistryFinance, General
Humanities/Humanistic Studies
Industrial Engineering
Industrial and Product Design
Information Resources Management
Information Technology
Interior Architecture
Marketing Research
Mathematics and Computer Science
Mathematics, General
Mechanical Engineering
Mechatronics, Robotics, and Automation Engineering
Molecular Biology
Physics, General
Physics, Other
Psychology, General
Registered Nursing/Registered Nurse
Speech Communication and Rhetoric
Telecommunications Technology/TechnicianAccounting
Biochemistry
Biology/Biological Sciences, General
Biotechnology
Chemical Engineering
Chemistry, General
Civil Engineering, General
Classics and Classical Languages, Literatures, and Linguistics, General
Computer Engineering, General
Computer Science
Economics, General
Education, General
Electrical and Electronics Engineering
Elementary Education and Teaching
Engineering, General
English Language and Literature, General
Environmental/Environmental Health Engineering
Finance, General
French Language and Literature
History, General
International Relations and Affairs
Junior High/Intermediate/Middle School Education and TeachingLiberal Arts and Sciences/Liberal Studies
Management Science
Marketing/Marketing Management, General
Mathematics, General
Mechanical Engineering
Multi-/Interdisciplinary Studies, Other
Nuclear Medical Technology/Technologist
Nuclear and Industrial Radiologic Technologies/Technicians, Other
Organizational Behavior Studies
Peace Studies and Conflict Resolution
Philosophy
Physical Education Teaching and Coaching
Physics, General
Political Science and Government, General
Psychology, General
Radiologic Technology/Science - Radiographer
Religion/Religious Studies
Sociology
Spanish Language and Literature
Special Education and Teaching, General
Teacher Education, Multiple Levels
Urban Studies/AffairsAerospace, Aeronautical and Astronautical/Space Engineering
Anthropology
Architecture
Bioengineering and Biomedical Engineering
Biology/Biological Sciences, General
Business/Commerce, General
Chemical Engineering
Chemical and Biomolecular Engineering
Chemistry, General
City/Urban, Community and Regional Planning
Civil Engineering, General
Cognitive Science
Computational Biology
Computer Science
Creative Writing
Drama and Dramatics/Theatre Arts, General
Econometrics and Quantitative Economics
Electrical and Electronics Engineering
English Language and Literature, General
Environmental/Environmental Health EngineeringFinancial Mathematics
Foreign Languages and Literatures, General
Geology/Earth Science, General
History, General
Liberal Arts and Sciences/Liberal Studies
Linguistics
Management Sciences and Quantitative Methods, Other
Mass Communication/Media Studies
Materials Engineering
Mathematics and Computer Science
Mathematics, General
Mechanical Engineering
Music, General
Neuroscience
Nuclear Engineering
Philosophy
Physics, General
Political Science and Government, General
Science, Technology and SocietyAccounting
African-American/Black Studies
Art/Art Studies, General
Biochemistry
Biology/Biological Sciences, General
Business Administration, Management and Operations, Other
Business/Commerce, General
Chemistry, General
Chemistry, Other
Classics and Classical Languages, Literatures, and Linguistics, General
Computational Science
Computer Science
Creative Writing
Criminology
Drama and Dramatics/Theatre Arts, General
Economics, General
Elementary Education and Teaching
Engineering, General
Engineering/Industrial Management
English Language and Literature, General
Entrepreneurship/Entrepreneurial Studies
Finance, General
French Language and Literature
German Language and Literature
Graphic Design
Health/Medical Preparatory Programs, Other
History, General
Human Resources Management/Personnel Administration, General
Human Services, General
Information Science/Studies
International Business/Trade/Commerce
International Public Health/International HealthInternational Relations and Affairs
International/Global Studies
Journalism
Junior High/Intermediate/Middle School Education and Teaching
Latin Language and Literature
Liberal Arts and Sciences/Liberal Studies
Management Sciences and Quantitative Methods, Other
Marketing, Other
Marketing/Marketing Management, General
Mass Communication/Media Studies
Mathematics, General
Multi-/Interdisciplinary Studies, Other
Music Performance, General
Music Teacher Education
Music, General
Music, Other
Neuroscience
Philosophy
Physics, General
Political Science and Government, General
Pre-Medicine/Pre-Medical Studies
Psychology, General
Public Health, General
Public Policy Analysis, General
Regional Studies (U.S., Canadian, Foreign)
Registered Nursing/Registered Nurse
Religion/Religious Studies
Sociology
Spanish Language and Literature
Speech Communication and Rhetoric
Technical and Scientific Communication
Women's StudiesAccounting
Applied Mathematics, Other
Art History, Criticism and Conservation
Biochemistry
Biology Teacher Education
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry Teacher Education
Chemistry, General
Civil Engineering, General
Communication, Journalism, and Related Programs, Other
Computer Engineering, General
Computer Science
Criminal Justice/Law Enforcement Administration
Design and Applied Arts, Other
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
Economics, General
Education, General
Electrical and Electronics Engineering
Elementary Education and Teaching
English Language and Literature, General
English/Language Arts Teacher Education
Environmental Science
Environmental Studies
Exercise Physiology
Family and Community Services
Finance, General
Financial Planning and Services
French Language Teacher Education
French Language and Literature
Health Professions and Related Clinical Sciences, Other
Health Services/Allied Health/Health Sciences, General
History Teacher EducationHistory, General
Human Development, Family Studies, and Related Services, Other
Human Resources Management/Personnel Administration, General
Information Technology
International Business/Trade/Commerce
International/Global Studies
Italian Studies
Junior High/Intermediate/Middle School Education and Teaching
Liberal Arts and Sciences/Liberal Studies
Marketing/Marketing Management, General
Mathematics Teacher Education
Mathematics, General
Mechanical Engineering
Multi-/Interdisciplinary Studies, General
Nutrition Sciences
Philosophy
Physics Teacher Education
Physics, General
Political Science and Government, General
Pre-Physical Therapy Studies
Psychology, General
Public Health, General
Religion/Religious Studies
Romance Languages, Literatures, and Linguistics, General
Science Teacher Education/General Science Teacher Education
Secondary Education and Teaching
Social Studies Teacher Education
Sociology
Spanish Language Teacher Education
Spanish Language and Literature
Special Education and Teaching, General
Sport and Fitness Administration/Management
Teacher Education, Multiple Levels
Women's StudiesAccounting
Aerospace, Aeronautical and Astronautical/Space Engineering
Agribusiness/Agricultural Business Operations
Agricultural Economics
Agricultural Teacher Education
Agroecology and Sustainable Agriculture
Agronomy and Crop Science
Animal Sciences, General
Anthropology
Apparel and Textiles, General
Architecture
Biochemistry
Bioengineering and Biomedical Engineering
Biological and Physical Sciences
Biology/Biological Sciences, General
Business Administration and Management, General
Business Teacher Education
Business/Managerial Economics
Chemical Engineering
Chemistry, General
Civil Engineering, General
Clinical Laboratory Science/Medical Technology/Technologist
Computer Engineering, General
Computer and Information Sciences, General
Construction Management
Criminology
Culinary Science/Culinology
Economics, General
Educational Psychology
Electrical and Electronics Engineering
Elementary Education and Teaching
Engineering, Other
English Language and Literature, General
Family and Consumer Sciences/Human Sciences, General
Finance, General
Food Science
Foreign Languages and Literatures, General
Forest Sciences and BiologyGeology/Earth Science, General
Health/Health Care Administration/Management
History, General
Horticultural Science
Human Development and Family Studies, General
Industrial Engineering
Industrial Production Technologies/Technicians, Other
Industrial Technology/Technician
Insurance
Interior Architecture
Kinesiology and Exercise Science
Landscape Architecture
Landscaping and Groundskeeping
Liberal Arts and Sciences/Liberal Studies
Management Information Systems, General
Marketing/Marketing Management, General
Mathematics, General
Mechanical Engineering
Medical Microbiology and Bacteriology
Multi-/Interdisciplinary Studies, Other
Music Teacher Education
Music, General
Natural Resources/Conservation, General
Petroleum Engineering
Philosophy
Physics, General
Political Science and Government, General
Poultry Science
Psychology, General
Real Estate
Secondary Education and Teaching
Social Work
Sociology
Special Education and Teaching, General
Speech Communication and Rhetoric
Veterinary/Animal Health Technology/Technician and Veterinary Assistant
Visual and Performing Arts, General
Wildlife, Fish and Wildlands Science and ManagementAerospace, Aeronautical and Astronautical/Space Engineering
Agricultural Engineering
Applied Mathematics, General
Architectural Engineering
Biology/Biological Sciences, General
Business Administration and Management, General
Business, Management, Marketing, and Related Support Services, Other
Ceramic Sciences and Engineering
Chemical Engineering
Chemistry, General
Civil Engineering, General
Computer Engineering, General
Computer Science
Computer and Information Sciences and Support Services, Other
Computer and Information Sciences, General
Economics, General
Electrical and Electronics Engineering
Engineering, General
Engineering/Industrial Management
English Language and Literature, GeneralEnvironmental/Environmental Health Engineering
Geological and Earth Sciences/Geosciences, Other
Geological/Geophysical Engineering
Geology/Earth Science, General
Geophysics and Seismology
History, General
Industrial Engineering
Information Science/Studies
Mechanical Engineering
Metallurgical Engineering
Mining and Mineral Engineering
Nuclear Engineering
Petroleum Engineering
Philosophy
Physics, General
Professional, Technical, Business, and Scientific Writing
Psychology, General
Secondary Education and Teaching
Technical and Scientific CommunicationAccounting
Art/Art Studies, General
Biochemistry
Biological and Physical Sciences
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Community Health and Preventive Medicine
Computer Science
Economics, General
English Language and Literature, General
Environmental Science
Environmental Studies
French Language and Literature
French Studies
Geology/Earth Science, General
German Language and LiteratureGerman Studies
Health Services/Allied Health/Health Sciences, General
History, General
International Business/Trade/Commerce
Mathematics, General
Music, General
Neuroscience
Non-Profit/Public/Organizational Management
Philosophy
Physics, General
Political Science and Government, General
Psychology, General
Registered Nursing, Nursing Administration, Nursing Research and Clinical Nursing, Other
Registered Nursing/Registered Nurse
Religion/Religious Studies
Sociology
Spanish Language and LiteratureAfrican-American/Black Studies
Ancient Studies/Civilization
Ancient/Classical Greek Language and Literature
Anthropology
Architecture and Related Services, Other
Art History, Criticism and Conservation
Asian Studies/Civilization
Astronomy
Biochemistry
Biology/Biological Sciences, General
Chemistry, General
Classics and Classical Languages, Literatures, and Linguistics, General
Computer Science
Dance, General
Drama and Dramatics/Theatre Arts, General
East Asian Studies
Economics, General
Education, Other
English Language and Literature, General
Environmental Studies
Ethnic, Cultural Minority, Gender, and Group Studies, Other
Film/Cinema/Video Studies
Fine/Studio Arts, General
French Language and Literature
GeographyGeology/Earth Science, General
German Studies
History, General
International Relations and Affairs
Italian Language and Literature
Latin American and Caribbean Studies
Latin Language and Literature
Mathematics, General
Medieval and Renaissance Studies
Multi-/Interdisciplinary Studies, Other
Music, General
Near and Middle Eastern Studies
Neuroscience
Philosophy
Physics, General
Political Science and Government, General
Psychology, General
Religion/Religious Studies
Romance Languages, Literatures, and Linguistics, General
Russian Studies
Social Sciences, Other
Sociology
South Asian Studies
Spanish Language and Literature
Statistics, GeneralApplied Mathematics, General
Architecture
Architecture and Related Services, Other
Art/Art Studies, General
Biochemistry
Bioengineering and Biomedical Engineering
Bioinformatics
Biology/Biological Sciences, General
Biophysics
Business Administration and Management, General
Business, Management, Marketing, and Related Support Services, Other
Chemical Engineering
Chemistry, General
Civil Engineering, General
Clinical/Medical Laboratory Science and Allied Professions, Other
Communication and Media Studies, Other
Computer Engineering, General
Computer Science
Computer and Information Sciences, General
Electrical and Electronics Engineering
Engineering ScienceEngineering Technology, General
Environmental Science
Environmental/Environmental Health Engineering
General Studies
Geological/Geophysical Engineering
History, General
Industrial Engineering
Industrial and Product Design
Information Science/Studies
Information Technology
Interior Design
International Business/Trade/Commerce
Legal Professions and Studies, Other
Manufacturing Engineering
Mathematics, General
Mechanical Engineering
Physics, General
Professional, Technical, Business, and Scientific Writing
Science, Technology and Society
Technical Theatre/Theatre Design and TechnologyAccounting
Actuarial Science
African-American/Black Studies
Anthropology
Applied Psychology
Archeology
Area Studies, Other
Art History, Criticism and Conservation
Audiology/Audiologist and Speech-Language Pathology/Pathologist
Biochemistry
Bioengineering and Biomedical Engineering
Biology/Biological Sciences, General
Business Statistics
Business, Management, Marketing, and Related Support Services, Other
Business/Commerce, General
Business/Managerial Economics
Chemical Engineering
Chemical and Biomolecular Engineering
Chemistry Teacher Education
Chemistry, General
Cinematography and Film/Video Production
Civil Engineering, General
Classics and Classical Languages, Literatures, and Linguistics, General
Commercial and Advertising Art
Communication and Media Studies, Other
Community Organization and Advocacy
Comparative Literature
Computer Engineering, General
Computer and Information Sciences and Support Services, Other
Computer and Information Sciences, General
Construction Engineering
Dance, General
Dental Hygiene/Hygienist
Digital Communication and Media/Multimedia
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
East Asian Studies
Ecology
Econometrics and Quantitative Economics
Economics, General
Electrical and Electronics Engineering
Elementary Education and Teaching
Engineering Physics/Applied Physics
Engineering, Other
English Language and Literature, General
English Literature (British and Commonwealth)
Environmental Studies
Ethnic, Cultural Minority, Gender, and Group Studies, Other
European Studies/Civilization
Film/Cinema/Video Studies
Finance, General
Fine Arts and Art Studies, Other
Fine/Studio Arts, General
Foods, Nutrition, and Wellness Studies, General
Foreign Language Teacher Education
Foreign Languages and Literatures, General
Foreign Languages, Literatures, and Linguistics, Other
French Language Teacher Education
French Language and Literature
General Literature
General Studies
German Language and Literature
Health Professions and Related Clinical Sciences, OtherHebrew Language and Literature
History, General
Hotel/Motel Administration/Management
Humanities/Humanistic Studies
Information Technology
International Business/Trade/Commerce
International Relations and Affairs
International/Global Studies
Italian Language and Literature
Journalism
Keyboard Instruments
Labor and Industrial Relations
Latin American Studies
Latin Language and Literature
Liberal Arts and Sciences, General Studies and Humanities, Other
Liberal Arts and Sciences/Liberal Studies
Linguistics
Management Science
Management Sciences and Quantitative Methods, Other
Marketing/Marketing Management, General
Mathematics Teacher Education
Mathematics and Statistics, Other
Mathematics, General
Mechanical Engineering
Medieval and Renaissance Studies
Music Performance, General
Music Teacher Education
Music, General
Near and Middle Eastern Studies
Neuroscience
Nutrition Sciences
Occupational Therapy/Therapist
Operations Research
Parks, Recreation and Leisure Facilities Management, General
Philosophy
Photography
Physical Therapy/Therapist
Physics, General
Political Science and Government, General
Psychology, General
Public Administration
Public Administration and Social Service Professions, Other
Public Health, General
Radio and Television Broadcasting Technology/Technician
Real Estate
Registered Nursing/Registered Nurse
Religion/Religious Studies
Russian Language and Literature
Sales, Distribution, and Marketing Operations, General
Science Teacher Education/General Science Teacher Education
Social Sciences, General
Social Sciences, Other
Social Studies Teacher Education
Social Work
Sociology
Spanish Language Teacher Education
Spanish Language and Literature
Spanish and Iberian Studies
Special Education and Teaching, General
Speech Communication and Rhetoric
Urban Studies/Affairs
Visual and Performing Arts, General
Visual and Performing Arts, OtherAccounting
Advertising
African Studies
Art/Art Studies, General
Athletic Training/Trainer
Bible/Biblical Studies
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Comparative Literature
Computer Science
Creative Writing
Criminal Justice/Law Enforcement Administration
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
Economics, General
Elementary Education and Teaching
Engineering, General
English Language and Literature, General
Environmental Studies
Finance, General
French Language and Literature
French Studies
History, General
Information Technology
International Business/Trade/Commerce
International/Global StudiesKinesiology and Exercise Science
Management Science
Marketing/Marketing Management, General
Mass Communication/Media Studies
Mathematics, General
Music Teacher Education
Music, General
Non-Profit/Public/Organizational Management
Philosophy
Physical Education Teaching and Coaching
Physics, General
Political Science and Government, General
Pre-Dentistry Studies
Pre-Law Studies
Pre-Medicine/Pre-Medical Studies
Pre-Veterinary Studies
Psychology, General
Registered Nursing/Registered Nurse
Religious/Sacred Music
Rhetoric and Composition
Scandinavian Languages, Literatures, and Linguistics
Scandinavian Studies
Secondary Education and Teaching
Sociology
Spanish Language and Literature
Speech Communication and Rhetoric
Youth MinistryAfrican Studies
African-American/Black Studies
American/United States Studies/Civilization
Anthropology
Applied Mathematics, General
Area Studies, Other
Art History, Criticism and Conservation
Art/Art Studies, General
Asian Studies/Civilization
Astronomy
Audiology/Audiologist
Audiology/Audiologist and Speech-Language Pathology/Pathologist
Biochemistry
Bioengineering and Biomedical Engineering
Biological and Physical Sciences
Biology/Biological Sciences, General
Caribbean Studies
Cell/Cellular Biology and Histology
Chemical Engineering
Chemistry, General
Civil Engineering, General
Classics and Classical Languages, Literatures, and Linguistics, General
Cognitive Psychology and Psycholinguistics
Communication Sciences and Disorders, General
Communication and Media Studies, Other
Community Organization and Advocacy
Community Psychology
Comparative Literature
Computer Engineering, General
Computer Science
Computer and Information Sciences, General
Counseling Psychology
Dance, General
Drama and Dramatics/Theatre Arts, General
East Asian Languages, Literatures, and Linguistics, Other
Ecology
Economics, General
Education, General
Education/Teaching of Individuals with Specific Learning Disabilities
Electrical and Electronics Engineering
Engineering Science
Engineering, General
Engineering, Other
English Language and Literature, General
Environmental Science
Environmental Studies
Environmental/Environmental Health Engineering
Film/Cinema/Video Studies
French Language and Literature
General Studies
Geography
Geology/Earth Science, General
German Language and Literature
History, General
Humanities/Humanistic Studies
Industrial EngineeringInformation Science/Studies
International Relations and Affairs
Italian Language and Literature
Jazz/Jazz Studies
Journalism
Keyboard Instruments
Legal Studies, General
Liberal Arts and Sciences/Liberal Studies
Linguistics
Manufacturing Engineering
Materials Engineering
Materials Science
Mathematics Teacher Education
Mathematics, General
Mechanical Engineering
Molecular Biology
Multi-/Interdisciplinary Studies, General
Multi-/Interdisciplinary Studies, Other
Music History, Literature, and Theory
Music Performance, General
Music Teacher Education
Music Theory and Composition
Music, General
Music, Other
Musicology and Ethnomusicology
Neuroscience
Organizational Behavior Studies
Percussion Instruments
Philosophy
Physics, General
Political Science and Government, General
Pre-Medicine/Pre-Medical Studies
Psychology, General
Public Policy Analysis, General
Radio and Television
Religion/Religious Studies
Rhetoric and Composition
Science, Technology and Society
Secondary Education and Teaching
Slavic Languages, Literatures, and Linguistics, General
Slavic Studies
Social Sciences, Other
Social and Philosophical Foundations of Education
Sociology
South Asian Languages, Literatures, and Linguistics, General
Spanish Language and Literature
Speech Communication and Rhetoric
Speech-Language Pathology/Pathologist
Statistics, General
Stringed Instruments
Theatre Literature, History and Criticism
Urban Studies/Affairs
Visual and Performing Arts, General
Voice and Opera
Women's Studies
Woodwind InstrumentsAccounting
Art Teacher Education
Behavioral Sciences
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Computer Science
Computer Software Engineering
Computer and Information Sciences, General
Criminal Justice/Safety Studies
Dance, General
Diagnostic Medical Sonography/Sonographer and Ultrasound Technician
Drama and Dramatics/Theatre Arts, General
Education, General
Elementary Education and Teaching
English Language and Literature, General
English/Language Arts Teacher Education
Environmental Science
Finance, General
Fine/Studio Arts, General
General Studies
Health Professions and Related Clinical Sciences, Other
History, General
Human Development and Family Studies, GeneralHuman Services, General
Humanities/Humanistic Studies
International Relations and Affairs
Kinesiology and Exercise Science
Legal Assistant/Paralegal
Marine Biology and Biological Oceanography
Marketing/Marketing Management, General
Mathematics Teacher Education
Music, General
Nursing Administration
Philosophy
Physical Education Teaching and Coaching
Political Science and Government, General
Pre-Law Studies
Psychology, General
Public Administration
Registered Nursing/Registered Nurse
Respiratory Care Therapy/Therapist
Secondary Education and Teaching
Social Studies Teacher Education
Sociology
Speech Communication and Rhetoric
Speech-Language Pathology/Pathologist
Sport and Fitness Administration/ManagementAfrican-American/Black Studies
Anthropology
Architecture
Art History, Criticism and Conservation
Astrophysics
Chemical Engineering
Chemistry, General
Civil Engineering, General
Classics and Classical Languages, Literatures, and Linguistics, General
Comparative Literature
Computer Science
East Asian Studies
Ecology and Evolutionary Biology
Economics, General
Electrical and Electronics Engineering
Engineering, General
English Language and Literature, General
French Language and Literature
Geology/Earth Science, GeneralGerman Language and Literature
History, General
Mathematics, General
Mechanical Engineering
Molecular Biology
Multi-/Interdisciplinary Studies, Other
Music, General
Near and Middle Eastern Studies
Neuroscience
Operations Research
Philosophy
Physics, General
Political Science and Government, General
Psychology, General
Public Policy Analysis, General
Religion/Religious Studies
Slavic Languages, Literatures, and Linguistics, General
Sociology
Spanish Language and LiteratureAccounting
American/United States Studies/Civilization
Art History, Criticism and Conservation
Art/Art Studies, General
Biochemistry
Biology Teacher Education
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry Teacher Education
Chemistry, General
Classics and Classical Languages, Literatures, and Linguistics, Other
Community Organization and Advocacy
Computer Science
Creative Writing
Drama and Dramatics/Theatre Arts, General
Econometrics and Quantitative Economics
Economics, General
Engineering Physics/Applied Physics
English Language and Literature, General
English/Language Arts Teacher Education
Finance, General
Fire Science/Fire-fighting
Foreign Language Teacher Education
French Language Teacher Education
French Language and Literature
General Studies
Health/Health Care Administration/Management
History Teacher Education
History, General
Humanities/Humanistic StudiesInternational/Global Studies
Italian Language and Literature
Liberal Arts and Sciences/Liberal Studies
Marketing/Marketing Management, General
Mathematics Teacher Education
Mathematics, General
Music Teacher Education
Music, General
Organizational Leadership
Pastoral Studies/Counseling
Philosophy
Physics Teacher Education
Political Science and Government, General
Population Biology
Pre-Engineering
Psychology, General
Religion/Religious Studies
Secondary Education and Teaching
Social Sciences, General
Social Work
Sociology
Spanish Language Teacher Education
Spanish Language and Literature
Special Education and Teaching, General
Systems Engineering
Theological and Ministerial Studies, Other
Theology/Theological Studies
Vision Science/Physiological Optics
Women's StudiesAmerican/United States Studies/Civilization
Anthropology
Art/Art Studies, General
Biochemistry
Biology/Biological Sciences, General
Chemistry, General
Chinese Language and Literature
Classics and Classical Languages, Literatures, and Linguistics, General
Comparative Literature
Computer Science
Dance, General
Drama and Dramatics/Theatre Arts, General
Economics, General
English Language and Literature, General
Environmental Studies
Ethnic Studies
Fine/Studio Arts, General
French Language and LiteratureGerman Language and Literature
History, General
International Relations and Affairs
Linguistics
Mathematics and Statistics
Mathematics, General
Music, General
Neuroscience
Philosophy
Physics, General
Political Science and Government, General
Psychology, General
Religion/Religious Studies
Russian Language and Literature
Sociology
Spanish Language and Literature
Statistics, GeneralAncient/Classical Greek Language and Literature
Anthropology
Applied Mathematics, General
Architecture
Art History, Criticism and Conservation
Art/Art Studies, General
Asian Studies/Civilization
Astronomy
Astrophysics
Biochemistry
Bioengineering and Biomedical Engineering
Biology/Biological Sciences, General
Business Administration and Management, General
Chemical Engineering
Chemistry, General
Civil Engineering, General
Classics and Classical Languages, Literatures, and Linguistics, General
Computer Engineering, General
Computer and Information Sciences, General
Ecology
Economics, General
Electrical and Electronics Engineering
English Language and Literature, General
Environmental/Environmental Health Engineering
Evolutionary Biology
Fine/Studio Arts, General
French Language and Literature
Geology/Earth Science, General
Geophysics and SeismologyGerman Language and Literature
History, General
Kinesiology and Exercise Science
Latin American Studies
Latin Language and Literature
Linguistics
Materials Engineering
Materials Science
Mathematics, General
Mechanical Engineering
Multi-/Interdisciplinary Studies, Other
Music History, Literature, and Theory
Music Performance, General
Music Theory and Composition
Music, General
Neuroscience
Philosophy
Physical Chemistry
Physics, General
Political Science and Government, General
Psychology, General
Public Policy Analysis, General
Religion/Religious Studies
Sociology
Spanish Language and Literature
Sport and Fitness Administration/Management
Statistics, General
Visual and Performing Arts, Other
Women's StudiesAccounting
Advertising
American/United States Studies/Civilization
Art/Art Studies, General
Behavioral Sciences
Biochemistry
Biology/Biological Sciences, General
Biopsychology
Business Administration and Management, General
Business Administration, Management and Operations, Other
Business Teacher Education
Business/Managerial Economics
Chemistry, General
Computer Science
Computer and Information Sciences, General
Criminal Justice/Safety Studies
Dance, General
Directing and Theatrical Production
Economics, General
Elementary Education and Teaching
English Language and Literature, General
Entrepreneurship/Entrepreneurial Studies
Environmental Science
Finance, General
Fine and Studio Arts Management
French Language and Literature
Geology/Earth Science, General
German Language and Literature
Graphic Design
Health Policy Analysis
Health Services Administration
Health Services/Allied Health/Health Sciences, General
History, General
International Business/Trade/Commerce
International Relations and AffairsJournalism
Keyboard Instruments
Labor and Industrial Relations
Liberal Arts and Sciences/Liberal Studies
Logistics, Materials, and Supply Chain Management
Management Science
Management Sciences and Quantitative Methods, Other
Marine Sciences
Marketing/Marketing Management, General
Mathematics, General
Medical/Health Management and Clinical Assistant/Specialist
Modeling, Virtual Environments and Simulation
Music History, Literature, and Theory
Music Teacher Education
Music Theory and Composition
Music, General
Office Management and Supervision
Organizational Behavior Studies
Philosophy
Political Science and Government, General
Psychology, General
Public Relations/Image Management
Radio and Television
Registered Nursing/Registered Nurse
Religious/Sacred Music
Rhetoric and Composition
Science Teacher Education/General Science Teacher Education
Secondary Education and Teaching
Sociology
Spanish Language and Literature
Speech Communication and Rhetoric
Sport and Fitness Administration/Management
Sports Communication
Voice and OperaAccounting
Advertising
Aerospace, Aeronautical and Astronautical/Space Engineering
American Sign Language (ASL)
Animation, Interactive Technology, Video Graphics and Special Effects
Biochemistry
Bioengineering and Biomedical Engineering
Bioinformatics
Biological and Biomedical Sciences, Other
Biology/Biological Sciences, General
Biomedical Sciences, General
Biotechnology
Business Administration and Management, General
Business/Commerce, General
Ceramic Arts and Ceramics
Chemical Engineering
Chemistry, General
Cinematography and Film/Video Production
Civil Engineering Technology/Technician
Clinical Laboratory Science/Medical Technology/Technologist
Commercial Photography
Commercial and Advertising Art
Communication and Media Studies, Other
Computational Mathematics
Computer Engineering Technology/Technician
Computer Engineering, General
Computer Graphics
Computer Science
Computer Software Engineering
Computer Systems Analysis/Analyst
Computer Systems Networking and Telecommunications
Computer and Information Sciences, General
Computer and Information Systems Security/Information Assurance
Crafts/Craft Design, Folk Art and Artisanry
Criminal Justice/Law Enforcement Administration
Criminal Justice/Safety Studies
Data Modeling/Warehousing and Database Administration
Design and Visual Communications, General
Diagnostic Medical Sonography/Sonographer and Ultrasound Technician
Digital Communication and Media/Multimedia
Economics, General
Electrical and Electronic Engineering Technologies/Technicians, Other
Electrical and Electronics Engineering
Electromechanical Technology/Electromechanical Engineering Technology
Engineering, General
Engineering, Other
Engineering-Related Technologies, Other
Environmental Science
Finance, General
Fine/Studio Arts, General
Foodservice Systems Administration/Management
Game and Interactive Media Design
Graphic Communications, General
Graphic Design
Hospitality Administration/Management, General
Hospitality and Recreation Marketing OperationsHotel/Motel Administration/Management
Human Nutrition
Illustration
Industrial Engineering
Industrial and Product Design
Information Technology
Interior Design
Intermedia/Multimedia
International Business/Trade/Commerce
International Relations and Affairs
Journalism
Management Information Systems, General
Manufacturing Engineering Technology/Technician
Marketing/Marketing Management, General
Mathematics and Computer Science
Mathematics, General
Mechanical Engineering
Medical Illustration/Medical Illustrator
Metal and Jewelry Arts
Multi-/Interdisciplinary Studies, General
Natural Resources Management and Policy
Network and System Administration/Administrator
Occupational Safety and Health Technology/Technician
Painting
Philosophy
Photographic and Film/Video Technology/Technician and Assistant
Photojournalism
Physical Sciences, Other
Physician Assistant
Political Science and Government, General
Pre-Dentistry Studies
Pre-Law Studies
Pre-Medicine/Pre-Medical Studies
Pre-Veterinary Studies
Prepress/Desktop Publishing and Digital Imaging Design
Printing Management
Psychology, General
Public Policy Analysis, General
Public Relations, Advertising, and Applied Communication, Other
Public Relations/Image Management
Publishing
Resort Management
Restaurant/Food Services Management
Sculpture
Sign Language Interpretation and Translation
Sociology and Anthropology
Special Products Marketing Operations
Speech Communication and Rhetoric
Statistics, General
System, Networking, and LAN/WAN Management/Manager
Systems Engineering
Telecommunications Technology/Technician
Tourism and Travel Services Marketing Operations
Web Page, Digital/Multimedia and Information Resources Design
Web/Multimedia Management and Webmaster
Woodworking, GeneralAccounting
American/United States Studies/Civilization
Applied Mathematics, General
Architecture
Art History, Criticism and Conservation
Art/Art Studies, General
Biochemistry
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Civil Engineering, General
Communication and Media Studies, Other
Computer Engineering, General
Computer Science
Computer and Information Sciences, General
Construction Management
Corrections and Criminal Justice, Other
Creative Writing
Criminal Justice/Law Enforcement Administration
Cyber/Computer Forensics and Counterterrorism
Dance, General
Drama and Dramatics/Theatre Arts, General
Economics, General
Education, General
Electrical and Electronics Engineering
Elementary Education and Teaching
Engineering, General
English Language and Literature, General
English/Language Arts Teacher Education
Environmental Science
Environmental/Environmental Health Engineering
Finance, General
Financial Planning and Services
Fine/Studio Arts, General
Foreign Language Teacher EducationForeign Languages and Literatures, General
Forensic Science and Technology
Graphic Communications, General
Health/Health Care Administration/Management
Hispanic and Latin American Languages, Literatures, and Linguistics, General
Historic Preservation and Conservation
History Teacher Education
History, General
Humanities/Humanistic Studies
Industrial Technology/Technician
International Business/Trade/Commerce
International Relations and Affairs
International/Global Studies
Legal Assistant/Paralegal
Legal Professions and Studies, Other
Liberal Arts and Sciences/Liberal Studies
Management Information Systems, General
Marine Biology and Biological Oceanography
Marketing/Marketing Management, General
Mathematics Teacher Education
Mathematics, General
Mechanical Engineering
Mental and Social Health Services and Allied Professions, Other
Multi-/Interdisciplinary Studies, Other
Musicology and Ethnomusicology
Operations Management and Supervision
Philosophy
Political Science and Government, General
Psychology, General
Public Administration
Public Health, General
Secondary Education and Teaching
Social Sciences, General
Sociology and AnthropologyAquatic Biology/Limnology
Biochemistry
Bioengineering and Biomedical Engineering
Biological and Biomedical Sciences, Other
Biotechnology
Chemistry, General
Conservation Biology
Construction Management
Environmental Biology
Environmental Health
Environmental Science
Environmental Studies
Environmental/Environmental Health EngineeringForest Management/Forest Resources Management
Forest Sciences and Biology
Forestry, General
Forestry, Other
Landscape Architecture
Natural Resources Management and Policy
Paper Science and Engineering
Pre-Dentistry Studies
Pre-Law Studies
Pre-Medicine/Pre-Medical Studies
Pre-Veterinary Studies
Sustainability Studies
Wildlife BiologyAccounting
Aeronautics/Aviation/Aerospace Science and Technology, General
Aerospace, Aeronautical and Astronautical/Space Engineering
African-American/Black Studies
American/United States Studies/Civilization
Anthropology
Art History, Criticism and Conservation
Atmospheric Sciences and Meteorology, General
Biochemistry
Bioengineering and Biomedical Engineering
Biology/Biological Sciences, General
Biostatistics
Business Administration and Management, General
Business/Managerial Economics
Chemistry, General
Civil Engineering, General
Classics and Classical Languages, Literatures, and Linguistics, General
Clinical Laboratory Science/Medical Technology/Technologist
Clinical/Medical Laboratory Science and Allied Professions, Other
Communication Sciences and Disorders, General
Communication, General
Community Organization and Advocacy
Computer Engineering, General
Computer Science
Computer and Information Sciences, General
Criminal Justice/Safety Studies
Crisis/Emergency/Disaster Management
Dietetics/Dietitian
Drama and Dramatics/Theatre Arts, General
Education, General
Electrical and Electronics Engineering
Engineering Physics/Applied Physics
Engineering, General
English Language and Literature, General
Entrepreneurship/Entrepreneurial Studies
Environmental Science
Environmental Studies
Finance, General
Fine/Studio Arts, General
Forensic Science and Technology
French Language and Literature
General StudiesGeology/Earth Science, General
Geophysics and Seismology
German Language and Literature
Health Information/Medical Records Administration/Administrator
Health Services/Allied Health/Health Sciences, General
Health/Health Care Administration/Management
History, General
International Business/Trade/Commerce
International Relations and Affairs
Italian Language and Literature
Kinesiology and Exercise Science
Latin American Studies
Magnetic Resonance Imaging (MRI) Technology/Technician
Management Information Systems, General
Management Science
Marketing/Marketing Management, General
Mathematics, General
Mechanical Engineering
Medical Radiologic Technology/Science - Radiation Therapist
Medieval and Renaissance Studies
Music, General
Neuroscience
Nuclear Medical Technology/Technologist
Occupational Therapy/Therapist
Organizational Behavior Studies
Organizational Leadership
Philosophy
Physics, General
Political Science and Government, General
Project Management
Psychology, General
Public Health, General
Registered Nursing/Registered Nurse
Russian Language and Literature
Securities Services Administration/Management
Social Work
Sociology
Spanish Language and Literature
Sport and Fitness Administration/Management
Theology/Theological Studies
Women's StudiesAccounting
American/United States Studies/Civilization
Art History, Criticism and Conservation
Biochemistry and Molecular Biology
Biology Teacher Education
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Clinical Laboratory Science/Medical Technology/Technologist
Communication and Media Studies, Other
Criminal Justice/Law Enforcement Administration
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
Economics, General
Elementary Education and Teaching
English Language and Literature, General
English/Language Arts Teacher Education
Environmental Studies
Finance, General
Fine/Studio Arts, General
French Language Teacher Education
French Language and Literature
Health/Health Care Administration/Management
Historic Preservation and ConservationHistory Teacher Education
History, General
International Economics
International/Global Studies
Liberal Arts and Sciences/Liberal Studies
Management Science
Marketing/Marketing Management, General
Mathematics Teacher Education
Mathematics, General
Music Teacher Education
Music, General
Organizational Leadership
Philosophy
Political Science and Government, General
Psychology, General
Registered Nursing/Registered Nurse
Religion/Religious Studies
Secondary Education and Teaching
Social Work
Sociology
Spanish Language Teacher Education
Spanish Language and Literature
Special Education and Teaching, GeneralAccounting
Ancient/Classical Greek Language and Literature
Biochemistry
Biology/Biological Sciences, General
Business Administration and Management, General
Business/Managerial Economics
Chemistry, General
Classics and Classical Languages, Literatures, and Linguistics, General
Communication Sciences and Disorders, General
Computer Science
Cultural Studies/Critical Theory and Analysis
Drama and Dramatics/Theatre Arts, General
Economics, General
Engineering Physics/Applied Physics
English Language and Literature, General
Entrepreneurship/Entrepreneurial Studies
Environmental Science
Finance, General
Fine/Studio Arts, General
Foods, Nutrition, and Wellness Studies, General
French Language and Literature
Geography
German Language and Literature
Graphic Design
Health Information/Medical Records Administration/Administrator
History, General
Human Development and Family Studies, General
Interior Design
International Relations and Affairs
International/Global Studies
Journalism
Keyboard Instruments
Latin American Studies
Latin Language and LiteratureLegal Studies, General
Marine Biology and Biological Oceanography
Marketing/Marketing Management, General
Mathematics, General
Missions/Missionary Studies and Missiology
Music Performance, General
Music Teacher Education
Music Theory and Composition
Music, General
Musical Theatre
Organizational Leadership
Pharmaceutical Sciences
Philosophy
Philosophy and Religious Studies, General
Physics, General
Political Science and Government, General
Pre-Medicine/Pre-Medical Studies
Psychology, General
Public Administration
Public Health, General
Registered Nursing/Registered Nurse
Religion/Religious Studies
Religious/Sacred Music
Respiratory Care Therapy/Therapist
Romance Languages, Literatures, and Linguistics, General
Secondary Education and Teaching
Sociology
Spanish Language and Literature
Speech Communication and Rhetoric
Sport and Fitness Administration/Management
Teacher Education, Multiple Levels
Visual and Performing Arts, Other
Voice and Opera
Youth Services/AdministrationAccounting
Advertising
Aerospace, Aeronautical and Astronautical/Space Engineering
African-American/Black Studies
American Indian/Native American Studies
Anthropology
Applied Mathematics, General
Art History, Criticism and Conservation
Art/Art Studies, General
Asian Studies/Civilization
Astronomy
Athletic Training/Trainer
Atomic/Molecular Physics
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Civil Engineering, General
Classics and Classical Languages, Literatures, and Linguistics, General
Communication Sciences and Disorders, General
Comparative Literature
Computer Engineering, General
Computer Science
Construction Engineering Technology/Technician
Criminal Justice/Safety Studies
Dance, General
Digital Communication and Media/Multimedia
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
Ecology
Economics, General
Electrical and Electronics Engineering
Engineering, General
English Language and Literature, General
Environmental Science
Environmental Studies
Environmental/Environmental Health Engineering
Ethnic, Cultural Minority, Gender, and Group Studies, Other
European Studies/Civilization
Finance, General
Financial Planning and Services
Fine/Studio Arts, General
French Language and Literature
General Studies
Geography
Geology/Earth Science, General
German Language and Literature
Gerontology
Graphic Design
Health Communication
Health and Physical Education/Fitness, General
Hispanic-American, Puerto Rican, and Mexican-American/Chicano Studies
History, GeneralHospitality Administration/Management, General
Human Resources Management/Personnel Administration, General
Humanities/Humanistic Studies
Information Technology
Interior Design
International Business/Trade/Commerce
International Relations and Affairs
International Relations and National Security Studies, Other
Japanese Language and Literature
Jewish/Judaic Studies
Journalism
Kinesiology and Exercise Science
Latin American Studies
Liberal Arts and Sciences/Liberal Studies
Linguistics
Marketing/Marketing Management, General
Mathematics, General
Mechanical Engineering
Microbiology, General
Multi-/Interdisciplinary Studies, Other
Music Performance, General
Music Teacher Education
Music, General
Nutrition Sciences
Operations Management and Supervision
Parks, Recreation and Leisure Studies
Philosophy
Physical Sciences
Physics, General
Political Science and Government, General
Psychology, General
Public Administration
Public Administration and Social Service Professions, Other
Public Health, General
Public Relations/Image Management
Radio and Television
Real Estate
Registered Nursing/Registered Nurse
Religion/Religious Studies
Russian Language and Literature
Russian, Central European, East European and Eurasian Studies
Social Sciences, General
Social Work
Sociology
Spanish Language and Literature
Speech Communication and Rhetoric
Speech-Language Pathology/Pathologist
Statistics, General
Urban Studies/Affairs
Women's Studies
Writing, General
Zoology/Animal BiologyAnimation, Interactive Technology, Video Graphics and Special Effects
Architecture and Related Services, Other
Art History, Criticism and Conservation
Art Teacher Education
Art/Art Studies, General
Ceramic Arts and Ceramics
Cinematography and Film/Video Production
Computer Graphics
Creative Writing
Design and Applied Arts, Other
Design and Visual Communications, General
Digital Communication and Media/Multimedia
Drawing
Fashion/Apparel Design
Fiber, Textile and Weaving Arts
Film/Cinema/Video Studies
Film/Video and Photographic Arts, OtherFine Arts and Art Studies, Other
Fine/Studio Arts, General
Graphic Communications, General
Graphic Design
Illustration
Interior Architecture
Intermedia/Multimedia
Metal and Jewelry Arts
Music, Other
Painting
Photography
Printmaking
Sculpture
Visual and Performing Arts, General
Visual and Performing Arts, Other
Web Page, Digital/Multimedia and Information Resources DesignActuarial Science
American/United States Studies/Civilization
Biochemistry
Biological and Biomedical Sciences, Other
Biology/Biological Sciences, General
Business Administration, Management and Operations, Other
Business/Commerce, General
Chemistry, General
Classics and Classical Languages, Literatures, and Linguistics, General
Computational Mathematics
Computational Science
Computer and Information Sciences, General
Ecology
Economics, General
English Language and Literature, General
Environmental Science
Environmental StudiesFinance, General
French Language and Literature
History, General
Management Science
Marketing/Marketing Management, General
Mathematics and Statistics, Other
Mathematics, General
Multi-/Interdisciplinary Studies, General
Nursing Science
Philosophy
Physics, General
Political Science and Government, General
Psychology, General
Religion/Religious Studies
Social Work
Sociology
Spanish Language and LiteratureAfrican-American/Black Studies
American/United States Studies/Civilization
Ancient/Classical Greek Language and Literature
Anthropology
Architecture
Art History, Criticism and Conservation
Art/Art Studies, General
Astronomy
Biochemistry
Biology/Biological Sciences, General
Chemistry, General
Classics and Classical Languages, Literatures, and Linguistics, General
Comparative Literature
Computer Science
Dance, General
Drama and Dramatics/Theatre Arts, General
East Asian Languages, Literatures, and Linguistics, General
East Asian Studies
Economics, General
Education, General
Engineering Science
English Language and Literature, General
Environmental Studies
Film/Cinema/Video Studies
Fine/Studio Arts, General
French Language and Literature
French StudiesGeology/Earth Science, General
German Language and Literature
German Studies
History, General
Italian Language and Literature
Latin American Studies
Latin Language and Literature
Mathematics, General
Medieval and Renaissance Studies
Multi-/Interdisciplinary Studies, General
Music, General
Near and Middle Eastern Studies
Neuroscience
Philosophy
Physics, General
Political Science and Government, General
Portuguese Language and Literature
Pre-Law Studies
Pre-Medicine/Pre-Medical Studies
Psychology, General
Religion/Religious Studies
Russian Language and Literature
Russian Studies
Sociology
Spanish Language and Literature
Women's StudiesAccounting
Biochemistry
Bioinformatics
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Child Development
Computer Science
Computer and Information Sciences and Support Services, Other
Creative Writing
Digital Communication and Media/Multimedia
Drama and Dramatics/Theatre Arts, General
Elementary Education and Teaching
English Language and Literature, General
Environmental Studies
Finance, General
History, GeneralInternational/Global Studies
Journalism
Marketing/Marketing Management, General
Mathematics, General
Music History, Literature, and Theory
Philosophy
Physical Education Teaching and Coaching
Political Science and Government, General
Psychology, General
Sociology
Spanish Language and Literature
Special Education and Teaching, General
Sport and Fitness Administration/Management
Theology/Theological Studies
Visual and Performing Arts, General
Women's StudiesAccounting
Acting
Biochemistry
Biology/Biological Sciences, General
Biotechnology
Business Administration and Management, General
Business/Corporate Communications
Chemistry, General
Cinematography and Film/Video Production
Clinical Laboratory Science/Medical Technology/Technologist
Computer Systems Networking and Telecommunications
Computer and Information Sciences, General
Criminal Justice/Law Enforcement Administration
Design and Visual Communications, General
Digital Communication and Media/Multimedia
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and TeachingElementary Education and Teaching
English Language and Literature, General
Environmental Science
Family and Community Services
Fashion Merchandising
Fashion/Apparel Design
Film/Cinema/Video Studies
History, General
Information Science/Studies
Junior High/Intermediate/Middle School Education and Teaching
Legal Assistant/Paralegal
Legal Studies, General
Management Information Systems, General
Marketing, Other
Multi-/Interdisciplinary Studies, General
Psychology, General
Registered Nursing/Registered NurseAfrican-American/Black Studies
American/United States Studies/Civilization
Anthropology
Applied Mathematics, General
Art History, Criticism and Conservation
Art/Art Studies, General
Asian Studies/Civilization
Astronomy
Athletic Training/Trainer
Atmospheric Sciences and Meteorology, General
Biochemistry
Bioengineering and Biomedical Engineering
Biological and Physical Sciences
Biology/Biological Sciences, General
Business Administration and Management, General
Chemical and Biomolecular Engineering
Chemistry, General
Chemistry, Other
Civil Engineering, General
Clinical Laboratory Science/Medical Technology/Technologist
Comparative Literature
Computer and Information Sciences, General
Drama and Dramatics/Theatre Arts, General
Ecology
Economics, General
Electrical and Electronics Engineering
Engineering, General
English Language and Literature, General
Environmental Design/Architecture
Environmental Studies
European Studies/CivilizationFrench Language and Literature
Geology/Earth Science, General
German Language and Literature
Health Services/Allied Health/Health Sciences, General
History, General
Human Computer Interaction
Information Science/Studies
Italian Language and Literature
Journalism
Linguistics
Marine Biology and Biological Oceanography
Mathematics, General
Mechanical Engineering
Multi-/Interdisciplinary Studies, Other
Music, General
Pharmacology
Philosophy
Physical Sciences, Other
Physics, General
Political Science and Government, General
Polysomnography
Psychology, General
Registered Nursing/Registered Nurse
Religion/Religious Studies
Respiratory Care Therapy/Therapist
Social Work
Sociology
Spanish Language and Literature
Sustainability Studies
Women's StudiesAccounting
Advertising
Art History, Criticism and Conservation
Asian Studies/Civilization
Biochemistry
Biology/Biological Sciences, General
Broadcast Journalism
Business Administration and Management, General
Business/Managerial Economics
Chemistry, General
Computer Engineering, General
Computer Science
Computer and Information Sciences, General
Criminology
Drama and Dramatics/Theatre Arts, General
Economics, General
English Language and Literature, General
Entrepreneurship/Entrepreneurial Studies
Environmental Science
Environmental Studies
Environmental/Environmental Health Engineering
Finance, General
Fine/Studio Arts, General
Foreign Languages and Literatures, General
Graphic Design
History, GeneralInformation Science/Studies
Interior Design
International Business/Trade/Commerce
International and Intercultural Communication
Journalism
Legal Assistant/Paralegal
Marketing/Marketing Management, General
Mass Communication/Media Studies
Mathematics, General
Mental Health Counseling/Counselor
Organizational Communication, General
Philosophy
Physical Sciences
Physics, General
Political Communication
Political Science and Government, General
Psychology, General
Public Policy Analysis, General
Public Relations/Image Management
Radiation Biology/Radiobiology
Radio and Television
Radio and Television Broadcasting Technology/Technician
Sociology
Spanish Language and Literature
Speech Communication and Rhetoric
Visual and Performing Arts, GeneralAccounting
Acting
Actuarial Science
Advertising
Anthropology
Art History, Criticism and Conservation
Art Teacher Education
Astronomy and Astrophysics, Other
Athletic Training/Trainer
Ballet
Bilingual and Multilingual Education
Biochemistry
Biology/Biological Sciences, General
Ceramic Arts and Ceramics
Chemistry, General
Computer Systems Analysis/Analyst
Computer and Information Sciences, General
Creative Writing
Criminal Justice/Safety Studies
Dance, General
Design and Visual Communications, General
Developmental and Child Psychology
Dietetics and Clinical Nutrition Services, Other
Dietetics/Dietitian
Directing and Theatrical Production
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
Economics, General
Education/Teaching of Individuals with Hearing Impairments Including Deafness
Elementary Education and Teaching
Engineering, General
English Language and Literature, General
English/Language Arts Teacher Education
Entrepreneurship/Entrepreneurial Studies
Environmental Science
Farm/Farm and Ranch Management
Fashion Merchandising
Finance, General
Fine/Studio Arts, General
French Language and Literature
General Studies
Geography
Geological and Earth Sciences/Geosciences, Other
Geology/Earth Science, General
German Language and Literature
Graphic Design
Health and Physical Education/Fitness, General
History, General
Information TechnologyInterior Design
International Business/Trade/Commerce
International Economics
International Finance
International Marketing
International Relations and Affairs
Journalism
Keyboard Instruments
Logistics, Materials, and Supply Chain Management
Marketing/Marketing Management, General
Mathematics Teacher Education
Mathematics, General
Movement Therapy and Movement Education
Multi-/Interdisciplinary Studies, General
Music Performance, General
Music Teacher Education
Music Theory and Composition
Music, General
Musical Theatre
Neuroscience
Painting
Philosophy
Photography
Physical Education Teaching and Coaching
Physics, General
Political Science and Government, General
Printmaking
Psychology, General
Public Relations, Advertising, and Applied Communication
Public Relations/Image Management
Radio, Television, and Digital Communication, Other
Real Estate
Registered Nursing/Registered Nurse
Religion/Religious Studies
Religious/Sacred Music
Science Teacher Education/General Science Teacher Education
Sculpture
Secondary Education and Teaching
Social Studies Teacher Education
Social Work
Sociology
Spanish Language and Literature
Special Education and Teaching, General
Speech Communication and Rhetoric
Speech-Language Pathology/Pathologist
Sports Studies
Stringed Instruments
Technical Theatre/Theatre Design and Technology
Voice and OperaAccounting
Acting
Actuarial Science
Advertising
African-American/Black Studies
American/United States Studies/Civilization
Anthropology
Applied Mathematics, General
Applied Mathematics, Other
Architectural and Building Sciences/Technology
Art History, Criticism and Conservation
Art Teacher Education
Asian Studies/Civilization
Audiology/Audiologist and Speech-Language Pathology/Pathologist
Biochemistry
Bioengineering and Biomedical Engineering
Biology/Biological Sciences, General
Biophysics
Business/Commerce, General
Ceramic Arts and Ceramics
Chemistry, General
Chinese Language and Literature
Cinematography and Film/Video Production
City/Urban, Community and Regional Planning
Civil Engineering, General
Classics and Classical Languages, Literatures, and Linguistics, General
Computational Science
Computer and Information Sciences, General
Computer and Information Sciences, Other
Construction Engineering Technology/Technician
Criminal Justice/Safety Studies
Dance, General
Economics, General
Electrical and Electronics Engineering
Elementary Education and Teaching
Engineering Technology, General
Engineering, General
English Language and Literature, General
English/Language Arts Teacher Education
Entrepreneurship/Entrepreneurial Studies
Environmental Science
Environmental Studies
Environmental/Environmental Health Engineering
Fiber, Textile and Weaving Arts
Finance, General
Financial Planning and Services
Fine Arts and Art Studies, Other
Foreign Language Teacher Education
French Language and Literature
Geography, Other
Geology/Earth Science, General
German Language and Literature
German Studies
Graphic Design
Historic Preservation and Conservation
History, General
Horticultural Science
Hospitality Administration/Management, General
Human Development and Family Studies, General
Human Resources Management/Personnel Administration, General
Industrial Engineering
Information Technology
InsuranceInternational Business/Trade/Commerce
International/Global Studies
Italian Language and Literature
Japanese Language and Literature
Jazz/Jazz Studies
Jewish/Judaic Studies
Journalism
Junior High/Intermediate/Middle School Education and Teaching
Kinesiology and Exercise Science
Landscape Architecture
Latin American Studies
Legal Professions and Studies, Other
Liberal Arts and Sciences/Liberal Studies
Logistics, Materials, and Supply Chain Management
Management Information Systems and Services, Other
Marketing/Marketing Management, General
Mass Communication/Media Studies
Mathematics Teacher Education
Mathematics and Computer Science
Mathematics, General
Mathematics, Other
Mechanical Engineering
Metal and Jewelry Arts
Multi-/Interdisciplinary Studies, Other
Music History, Literature, and Theory
Music Pedagogy
Music Performance, General
Music Teacher Education
Music Theory and Composition
Music Therapy/Therapist
Music, General
Natural Sciences
Neuroscience
Organizational Communication, General
Painting
Pharmaceutics and Drug Design
Philosophy
Photography
Physical Sciences, Other
Physics, General
Political Science and Government, General
Printmaking
Psychology, General
Public Health Education and Promotion
Public Relations, Advertising, and Applied Communication, Other
Public Relations/Image Management
Radio and Television
Real Estate
Registered Nursing/Registered Nurse
Religion/Religious Studies
Science Teacher Education/General Science Teacher Education
Sculpture
Social Studies Teacher Education
Social Work
Sociology
Spanish Language and Literature
Sport and Fitness Administration/Management
Statistics, General
Therapeutic Recreation/Recreational Therapy
Trade and Industrial Teacher Education
Visual and Performing Arts, General
Women's StudiesAccounting
Advertising
Agricultural Business and Management, General
Agricultural Communication/Journalism
Agricultural Economics
Agriculture, General
Animal Sciences, General
Anthropology
Architecture
Art/Art Studies, General
Biochemistry
Biological and Physical Sciences
Biology/Biological Sciences, General
Business Administration and Management, General
Business Administration, Management and Operations, Other
Business/Commerce, General
Cell/Cellular and Molecular Biology
Chemical Engineering
Chemistry, General
Child Care and Support Services Management
Child Development
Civil Engineering, General
Classics and Classical Languages, Literatures, and Linguistics, General
Computer Engineering, General
Computer and Information Sciences, General
Construction Engineering
Dance, General
Dietetics/Dietitian
Digital Communication and Media/Multimedia
Drama and Dramatics/Theatre Arts, General
Economics, General
Electrical and Electronics Engineering
English Language and Literature, General
Environmental/Environmental Health Engineering
Family Resource Management Studies, General
Family and Community Services
Family and Consumer Sciences/Human Sciences, General
Fashion Merchandising
Fashion/Apparel Design
Finance, General
Food Science
Foreign Languages and Literatures, General
French Language and Literature
General StudiesGeography
Geology/Earth Science, General
German Language and Literature
History, General
Hotel/Motel Administration/Management
Human Development and Family Studies, General
Industrial Engineering
Information Science/Studies
Interior Architecture
International Business/Trade/Commerce
International Economics
International/Global Studies
Journalism
Kinesiology and Exercise Science
Landscape Architecture
Liberal Arts and Sciences/Liberal Studies
Logistics, Materials, and Supply Chain Management
Marketing/Marketing Management, General
Mass Communication/Media Studies
Mathematics, General
Mechanical Engineering
Microbiology, General
Multi-/Interdisciplinary Studies, Other
Music, General
Natural Resources Law Enforcement and Protective Services
Natural Resources/Conservation, General
Nutrition Sciences
Petroleum Engineering
Philosophy
Physics, General
Plant Sciences, General
Political Science and Government, General
Professional, Technical, Business, and Scientific Writing
Psychology, General
Public Relations/Image Management
Radio and Television
Rhetoric and Composition
Russian Studies
Science, Technology and Society
Social Work
Sociology
Spanish Language and Literature
Sport and Fitness Administration/Management
Zoology/Animal BiologyAccounting
Advertising
Art/Art Studies, General
Biochemistry
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Christian Studies
Computer and Information Sciences, General
Elementary Education and Teaching
English Language and Literature, General
Environmental Studies
Exercise Physiology
Finance, General
Health Information/Medical Records Administration/Administrator
Health Services/Allied Health/Health Sciences, General
History, General
Humanities/Humanistic Studies
Indian/Native American Education
International/Global StudiesJournalism
Liberal Arts and Sciences/Liberal Studies
Marketing/Marketing Management, General
Mathematics, General
Music Performance, General
Organizational Behavior Studies
Peace Studies and Conflict Resolution
Philosophy
Physical Sciences
Psychology, General
Registered Nursing/Registered Nurse
Religion/Religious Studies
School Librarian/School Library Media Specialist
Social Science Teacher Education
Social Sciences, General
Social Work
Spanish Language and Literature
Speech Communication and Rhetoric
Teacher Education, Multiple Levels
Women's StudiesAfrican-American/Black Studies
Anthropology
Archeology
Art History, Criticism and Conservation
Biochemistry
Biology/Biological Sciences, General
Business/Managerial Economics
Chemistry, General
Classics and Classical Languages, Literatures, and Linguistics, General
Comparative Literature
Computer Science
Drama and Dramatics/Theatre Arts, General
Economics, General
English Language and Literature, General
Environmental Science
Fine/Studio Arts, General
French Language and Literature
Geological and Earth Sciences/Geosciences, Other
Geology/Earth Science, General
German Studies
History, General
International Relations and Affairs
Mass Communication/Media StudiesMathematics, General
Molecular Biology
Multi-/Interdisciplinary Studies, General
Multi-/Interdisciplinary Studies, Other
Music History, Literature, and Theory
Music Performance, General
Music Teacher Education
Music Theory and Composition
Music Therapy/Therapist
Music, General
Neuroscience
Philosophy
Physics, General
Political Science and Government, General
Psychology, General
Religion/Religious Studies
Russian Studies
Sociology
Spanish Language and Literature
Speech Communication and Rhetoric
Urban Studies/Affairs
Women's StudiesAccounting
Anthropology
Art History, Criticism and Conservation
Art Teacher Education
Art/Art Studies, General
Biology/Biological Sciences, General
Business/Commerce, General
Chemistry Teacher Education
Chemistry, General
Classics and Classical Languages, Literatures, and Linguistics, General
Computer and Information Sciences, General
Drama and Dramatics/Theatre Arts, General
Economics, General
Elementary Education and Teaching
English Language and Literature, General
French Language and Literature
German Language and Literature
History, GeneralJunior High/Intermediate/Middle School Education and Teaching
Kinesiology and Exercise Science
Mathematics, General
Music Performance, General
Music Teacher Education
Music Technology
Neuroscience
Philosophy
Physical Education Teaching and Coaching
Physics, General
Political Science and Government, General
Psychology, General
Religion/Religious Studies
Social and Philosophical Foundations of Education
Sociology
Sociology and Anthropology
Spanish Language and LiteratureAccounting
Advertising
Aerospace, Aeronautical and Astronautical/Space Engineering
African-American/Black Studies
American/United States Studies/Civilization
Anthropology
Apparel and Textiles, General
Architectural Engineering
Art History, Criticism and Conservation
Athletic Training/Trainer
Audiology/Audiologist and Speech-Language Pathology/Pathologist
Biology/Biological Sciences, General
Business Administration and Management, General
Business/Managerial Economics
Chemical Engineering
Chemistry, General
Civil Engineering, General
Computer and Information Sciences, General
Construction Engineering
Criminal Justice/Safety Studies
Criminology
Dance, General
Drama and Dramatics/Theatre Arts, General
Electrical and Electronics Engineering
Elementary Education and Teaching
English Language and Literature, General
Environmental Science
Environmental/Environmental Health Engineering
Family Resource Management Studies, General
Family and Consumer Sciences/Human Sciences, General
Finance, General
Fine/Studio Arts, General
Foreign Languages and Literatures, General
GeographyGeology/Earth Science, General
History, General
Hospital and Health Care Facilities Administration/Management
Hospitality Administration/Management, General
Human Development and Family Studies, General
Human Development, Family Studies, and Related Services, Other
Human Nutrition
Interior Design
International Relations and Affairs
Management Information Systems, General
Management Science
Marine Biology and Biological Oceanography
Marketing/Marketing Management, General
Mathematics, General
Mechanical Engineering
Metallurgical Engineering
Microbiology, General
Multi-/Interdisciplinary Studies, General
Music Teacher Education
Music, General
Philosophy
Physical Education Teaching and Coaching
Physics, General
Political Science and Government, General
Psychology, General
Public Relations/Image Management
Registered Nursing/Registered Nurse
Religion/Religious Studies
Secondary Education and Teaching
Social Work
Spanish Language and Literature
Special Education and Teaching, General
Speech Communication and RhetoricAccounting
African-American/Black Studies
Anthropology
Art/Art Studies, General
Bioengineering and Biomedical Engineering
Biological and Physical Sciences
Biology/Biological Sciences, General
Business Administration and Management, General
Business Administration, Management and Operations, Other
Business/Managerial Economics
Chemistry, General
Civil Engineering, General
Clinical Laboratory Science/Medical Technology/Technologist
Computer and Information Sciences, General
Corrections and Criminal Justice, Other
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
Electrical and Electronics Engineering
Elementary Education and Teaching
English Language and Literature, General
Finance, General
Foreign Languages and Literatures, General
Health Information/Medical Records Administration/AdministratorHealth Teacher Education
Health/Health Care Administration/Management
History, General
Management Information Systems, General
Marketing/Marketing Management, General
Materials Engineering
Mathematics, General
Mechanical Engineering
Music, General
Neuroscience
Nuclear Medical Technology/Technologist
Philosophy
Physical Education Teaching and Coaching
Physics, General
Political Science and Government, General
Psychology, General
Registered Nursing/Registered Nurse
Respiratory Care Therapy/Therapist
Secondary Education and Teaching
Social Sciences, Other
Social Work
Sociology
Speech Communication and RhetoricAccounting
Aerospace, Aeronautical and Astronautical/Space Engineering
African-American/Black Studies
Agricultural Business Technology
Agricultural Business and Management, General
Agriculture, Agriculture Operations, and Related Sciences, Other
Agronomy and Crop Science
American Indian/Native American Studies
Animal Sciences, General
Anthropology
Applied Economics
Arabic Language and Literature
Architecture
Architecture and Related Services, Other
Art History, Criticism and Conservation
Art Teacher Education
Astronomy
Biochemistry
Bioengineering and Biomedical Engineering
Bioinformatics
Biological/Biosystems Engineering
Biology/Biological Sciences, General
Business Administration and Management, General
Business/Commerce, General
Business/Managerial Economics
Cell/Cellular and Molecular Biology
Chemical Engineering
Chemistry, General
City/Urban, Community and Regional Planning
Civil Engineering, General
Classics and Classical Languages, Literatures, and Linguistics, General
Communication Sciences and Disorders, General
Community Health Services/Liaison/Counseling
Computer Science
Computer and Information Sciences, General
Creative Writing
Dance, General
Drama and Dramatics/Theatre Arts, General
East Asian Studies
Ecology and Evolutionary Biology
Economics, General
Electrical, Electronics and Communications Engineering, Other
Elementary Education and Teaching
Engineering/Industrial Management
English Language and Literature, General
Entrepreneurship/Entrepreneurial Studies
Environmental Science
Environmental Studies
Environmental/Environmental Health Engineering
Film/Cinema/Video Studies
Finance, General
Fine/Studio Arts, General
French Language and Literature
General Studies
Geographic Information Science and Cartography
Geography
Geology/Earth Science, General
German Language and Literature
Hispanic-American, Puerto Rican, and Mexican-American/Chicano Studies
History, GeneralHomeland Security
Human Development and Family Studies, General
Human Resources Management/Personnel Administration, General
Hydrology and Water Resources Science
Industrial Engineering
International/Global Studies
Italian Language and Literature
Jewish/Judaic Studies
Journalism
Kindergarten/Preschool Education and Teaching
Latin American Studies
Learning Sciences
Legal Professions and Studies, Other
Linguistics
Management Information Systems, General
Marketing/Marketing Management, General
Materials Science
Mathematics Teacher Education
Mathematics, General
Mechanical Engineering
Microbiology, General
Mining and Mineral Engineering
Multi-/Interdisciplinary Studies, General
Music Performance, General
Music Teacher Education
Music, General
Musical Theatre
Natural Resources/Conservation, General
Near and Middle Eastern Studies
Neuroscience
Nutrition Sciences
Operations Management and Supervision
Optics/Optical Sciences
Philosophy
Philosophy, Other
Physics, General
Physiology, General
Plant Sciences, General
Political Science and Government, General
Pre-Veterinary Studies
Psychology, General
Public Administration
Public Health, General
Reading Teacher Education
Registered Nursing/Registered Nurse
Religion/Religious Studies
Retail Management
Russian Language and Literature
Science Teacher Education/General Science Teacher Education
Science Technologies/Technicians, Other
Sociology
Spanish Language and Literature
Special Education and Teaching, General
Speech Communication and Rhetoric
Systems Engineering
Technical Theatre/Theatre Design and Technology
Visual and Performing Arts, General
Voice and Opera
Web Page, Digital/Multimedia and Information Resources Design
Women's StudiesAccounting
Agribusiness/Agricultural Business Operations
Agricultural and Extension Education Services
Agronomy and Crop Science
Animal Sciences, General
Anthropology
Apparel and Textiles, General
Architecture
Art History, Criticism and Conservation
Art/Art Studies, General
Audiology/Audiologist and Speech-Language Pathology/Pathologist
Bioengineering and Biomedical Engineering
Biological/Biosystems Engineering
Biology/Biological Sciences, General
Business Administration and Management, General
Business/Commerce, General
Business/Managerial Economics
Chemical Engineering
Chemistry, General
Civil Engineering, General
Classics and Classical Languages, Literatures, and Linguistics, General
Computer Engineering, General
Computer Science
Computer and Information Sciences, General
Criminal Justice/Safety Studies
Design and Visual Communications, General
Dietetics/Dietitian
Drama and Dramatics/Theatre Arts, General
Economics, General
Education, General
Electrical and Electronics Engineering
Elementary Education and Teaching
English Language and Literature, General
Environmental Science
Family and Consumer Sciences/Human Sciences, General
Finance, General
Food Science
Foods, Nutrition, and Wellness Studies, General
French Language and LiteratureGeography
Geology/Earth Science, General
German Language and Literature
Health and Physical Education/Fitness, General
History, General
Human Development and Family Studies, General
Human Resources Development
Industrial Engineering
Interior Design
International Business/Trade/Commerce
International Relations and Affairs
Journalism
Kindergarten/Preschool Education and Teaching
Landscape Architecture
Logistics, Materials, and Supply Chain Management
Management Science
Marketing/Marketing Management, General
Mathematics, General
Mechanical Engineering
Multi-/Interdisciplinary Studies, General
Music Performance, General
Ornamental Horticulture
Parks, Recreation and Leisure Studies
Philosophy
Physics, General
Political Science and Government, General
Poultry Science
Pre-Medicine/Pre-Medical Studies
Psychology, General
Public Health, General
Registered Nursing/Registered Nurse
Retail Management
Secondary Education and Teaching
Social Work
Sociology
Spanish Language and Literature
Special Education and Teaching, General
Speech Communication and Rhetoric
Technical Teacher EducationAerospace, Aeronautical and Astronautical/Space Engineering
African-American/Black Studies
Agricultural Business and Management, Other
Agriculture, Agriculture Operations, and Related Sciences, Other
American Indian/Native American Studies
American/United States Studies/Civilization
Animal Sciences, General
Animal Sciences, Other
Anthropology
Apparel and Textiles, General
Applied Mathematics, General
Art History, Criticism and Conservation
Asian-American Studies
Atmospheric Sciences and Meteorology, General
Bioengineering and Biomedical Engineering
Biology/Biological Sciences, General
Biotechnology
Botany/Plant Biology
Cell/Cellular Biology and Histology
Chemical Engineering
Chemistry, General
Chinese Language and Literature
City/Urban, Community and Regional Planning
Civil Engineering, General
Classical, Ancient Mediterranean and Near Eastern Studies and Archaeology
Comparative Literature
Computational Mathematics
East Asian Studies
Ecology, Evolution, Systematics and Population Biology, Other
Economics, General
Electrical and Electronics Engineering
Engineering, Other
English Language and Literature, General
Entomology
Environmental Studies
Environmental Toxicology
Exercise Physiology
Film/Cinema/Video Studies
Fine/Studio Arts, General
Food Science
French Language and Literature
Genetics, GeneralGeology/Earth Science, General
German Language and Literature
Hispanic-American, Puerto Rican, and Mexican-American/Chicano Studies
History, General
Human Development and Family Studies, General
Hydrology and Water Resources Science
International Agriculture
International Relations and Affairs
Italian Language and Literature
Japanese Language and Literature
Landscape Architecture
Linguistics
Materials Engineering
Mathematics, General
Mechanical Engineering
Microbiology, General
Molecular Biochemistry
Multi-/Interdisciplinary Studies, Other
Music, General
Natural Resources and Conservation, Other
Natural Resources/Conservation, General
Neurobiology and Anatomy
Nutrition Sciences
Philosophy
Physical Sciences, Other
Physics, General
Physics, Other
Political Science and Government, General
Political Science and Government, Other
Psychology, General
Religion/Religious Studies
Russian Language and Literature
Sociology
Soil Science and Agronomy, General
Spanish Language and Literature
Speech Communication and Rhetoric
Statistics, General
Urban Forestry
Visual and Performing Arts, Other
Women's Studies
Zoology/Animal BiologyActuarial Science
African-American/Black Studies
Anthropology
Applied Mathematics, Other
Area Studies, Other
Art History, Criticism and Conservation
Asian Studies/Civilization
Asian-American Studies
Biology/Biological Sciences, General
Biopsychology
Chemical Engineering
Chemistry, General
Chemistry, Other
Chinese Language and Literature
Classics and Classical Languages, Literatures, and Linguistics, General
Communication, General
Comparative Literature
Computer Engineering, General
Computer Science
Dance, General
Developmental Biology and Embryology
Drama and Dramatics/Theatre Arts, General
Ecology
Econometrics and Quantitative Economics
Economics, General
Electrical and Electronics Engineering
English Language and Literature, General
Environmental Studies
Experimental Psychology
Film/Cinema/Video Studies
Fine/Studio Arts, General
French Language and Literature
Geography
Geology/Earth Science, General
Geophysics and Seismology
German Language and Literature
Hispanic-American, Puerto Rican, and Mexican-American/Chicano StudiesHistory, General
History, Other
Hydrology and Water Resources Science
International/Global Studies
Italian Studies
Japanese Language and Literature
Liberal Arts and Sciences, General Studies and Humanities, Other
Liberal Arts and Sciences/Liberal Studies
Linguistic, Comparative, and Related Language Studies and Services, Other
Linguistics
Marine Biology and Biological Oceanography
Mathematics, General
Mechanical Engineering
Medieval and Renaissance Studies
Microbiology, General
Molecular Biology
Multi-/Interdisciplinary Studies, General
Multi-/Interdisciplinary Studies, Other
Music Theory and Composition
Music, General
Near and Middle Eastern Studies
Organic Chemistry
Pharmacology
Philosophy
Physics, General
Physiological Psychology/Psychobiology
Physiology, General
Political Science and Government, General
Portuguese Language and Literature
Psychology, General
Religion/Religious Studies
Slavic Languages, Literatures, and Linguistics, General
Sociology
Spanish Language and Literature
Statistics, General
Women's Studies
Zoology/Animal BiologyAnthropology
Art History, Criticism and Conservation
Art/Art Studies, General
Astrophysics
Bioengineering and Biomedical Engineering
Bioinformatics
Biology/Biological Sciences, General
Biomedical Sciences, General
Business/Managerial Economics
Cell/Cellular and Molecular Biology
Chemistry, General
Classics and Classical Languages, Literatures, and Linguistics, General
Cognitive Science
Community Organization and Advocacy
Comparative Literature
Computer Engineering, General
Computer Engineering, Other
Computer Science
Computer/Information Technology Services Administration and Management, Other
Drama and Dramatics/Theatre Arts, General
Ecology
Economics, General
Electrical and Electronics Engineering
Environmental Studies
Ethnic Studies
Film/Video and Photographic Arts, OtherForeign Languages and Literatures, General
Game and Interactive Media Design
Geology/Earth Science, General
Hispanic-American, Puerto Rican, and Mexican-American/Chicano Studies
History, General
International Economics
Italian Studies
Jewish/Judaic Studies
Legal Studies, General
Linguistics
Marine Biology and Biological Oceanography
Mathematics, General
Molecular Biochemistry
Molecular Biology
Music, General
Natural Sciences
Neuroscience
Philosophy
Physical Sciences
Physics, General
Plant Sciences, General
Political Science and Government, General
Psychology, General
Sociology
Spanish Language and Literature
Women's StudiesAccounting
Actuarial Science
Advertising
Aerospace, Aeronautical and Astronautical/Space Engineering
Anthropology
Architecture
Art/Art Studies, General
Arts, Entertainment, and Media Management, General
Athletic Training/Trainer
Audiology/Audiologist and Speech-Language Pathology/Pathologist
Biology/Biological Sciences, General
Biomedical Sciences, General
Biotechnology
Business Administration and Management, General
Business/Commerce, General
Business/Managerial Economics
Chemistry, General
Cinematography and Film/Video Production
Civil Engineering, General
Clinical Laboratory Science/Medical Technology/Technologist
Computer Engineering, General
Computer and Information Sciences, General
Criminal Justice/Safety Studies
Crisis/Emergency/Disaster Management
Digital Arts
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
Economics, General
Electrical and Electronics Engineering
Elementary Education and Teaching
English Language and Literature, General
Environmental Studies
Environmental/Environmental Health Engineering
Finance, General
Fine/Studio Arts, General
Forensic Science and Technology
French Language and Literature
General Studies
Health Information/Medical Records Administration/Administrator
Health Services/Allied Health/Health Sciences, General
Health/Health Care Administration/Management
History, GeneralHospitality Administration/Management, General
Hospitality Administration/Management, Other
Humanities/Humanistic Studies
Industrial Engineering
Information Technology
International/Global Studies
Journalism
Laser and Optical Engineering
Latin American Studies
Legal Assistant/Paralegal
Legal Studies, General
Marketing/Marketing Management, General
Mathematics, General
Mechanical Engineering
Meeting and Event Planning
Multi-/Interdisciplinary Studies, General
Music Performance, General
Non-Profit/Public/Organizational Management
Philosophy
Photography
Physical Education Teaching and Coaching
Physics, General
Political Science and Government, General
Psychology, General
Public Administration
Radio and Television
Real Estate
Registered Nursing/Registered Nurse
Religion/Religious Studies
Restaurant/Food Services Management
Rhetoric and Composition
Secondary Education and Teaching
Social Sciences, General
Social Work
Sociology
Spanish Language and Literature
Special Education and Teaching, General
Speech Communication and Rhetoric
Statistics, General
Structural Engineering
Teacher Education, Multiple Levels
Trade and Industrial Teacher EducationAccounting
African-American/Black Studies
Agribusiness/Agricultural Business Operations
Agricultural Business and Management, General
Agricultural Teacher Education
Agriculture, General
Animal Sciences, General
Anthropology
Apparel and Textiles, General
Art History, Criticism and Conservation
Art/Art Studies, General
Asian Studies/Civilization
Athletic Training/Trainer
Bilingual and Multilingual Education
Biochemistry
Bioengineering and Biomedical Engineering
Biology Teacher Education
Biology/Biological Sciences, General
Biometry/Biometrics
Business/Commerce, General
Chemical Engineering
Chemistry Teacher Education
Chemistry, General
Civil Engineering, General
Clinical Laboratory Science/Medical Technology/Technologist
Cognitive Science
Communication, General
Comparative Literature
Computer Engineering, General
Computer Science
Computer and Information Sciences, General
Criminology
Dietetics/Dietitian
Early Childhood Education and Teaching
Ecology
Economics, General
Economics, Other
Electrical and Electronics Engineering
Elementary Education and Teaching
Engineering Technology, General
Engineering, General
Engineering, Other
English Language and Literature, General
English/Language Arts Teacher Education
Entomology
Environmental Science
Environmental Studies
Environmental/Environmental Health Engineering
European Studies/Civilization
Exercise Physiology
Fashion/Apparel Design
Finance, General
Fine/Studio Arts, General
Food Science
Foods, Nutrition, and Wellness Studies, General
Foreign Languages and Literatures, General
Foreign Languages, Literatures, and Linguistics, Other
French Language Teacher Education
General Studies
Geography
Geography Teacher Education
Geology/Earth Science, General
German Language Teacher EducationHealth Professions and Related Clinical Sciences, Other
Health and Physical Education/Fitness, General
Historic Preservation and Conservation
History Teacher Education
History, General
Hospitality Administration/Management, General
Hotel/Motel Administration/Management
Human Services, General
International Business/Trade/Commerce
International Relations and Affairs
Italian Language and Literature
Keyboard Instruments
Kinesiology and Exercise Science
Landscape Architecture
Latin American Studies
Latin Teacher Education
Liberal Arts and Sciences/Liberal Studies
Linguistics
Management Information Systems, General
Management Science
Marine Biology and Biological Oceanography
Marketing/Marketing Management, General
Mathematics Teacher Education
Mathematics, General
Mechanical Engineering
Medical Microbiology and Bacteriology
Music History, Literature, and Theory
Music Performance, General
Music Teacher Education
Music Theory and Composition
Music, General
Music, Other
Natural Resources Management and Policy
Neuroscience
Nutrition Sciences
Operations Management and Supervision
Parks, Recreation and Leisure Facilities Management, General
Pharmacy
Philosophy
Physics Teacher Education
Physics, General
Plant Protection and Integrated Pest Management
Plant Sciences, General
Political Science and Government, General
Pre-Veterinary Studies
Psychology Teacher Education
Psychology, General
Public Policy Analysis, General
Registered Nursing/Registered Nurse
Russian Studies
Social Science Teacher Education
Social Studies Teacher Education
Sociology
Spanish Language Teacher Education
Spanish Language and Literature
Special Education and Teaching, General
Speech Communication and Rhetoric
Sport and Fitness Administration/Management
Statistics, General
Urban Education and Leadership
Voice and Opera
Wildlife, Fish and Wildlands Science and Management
Women's StudiesAccounting
Acting
Architectural Engineering Technology/Technician
Art History, Criticism and Conservation
Biology/Biological Sciences, General
Business Administration and Management, General
Ceramic Arts and Ceramics
Chemistry, General
Civil Engineering, General
Clinical Laboratory Science/Medical Technology/Technologist
Community Organization and Advocacy
Computer Engineering Technology/Technician
Computer Engineering, General
Computer and Information Sciences, General
Criminal Justice/Police Science
Dance, General
Design and Visual Communications, General
Drawing
Early Childhood Education and Teaching
Economics, General
Electrical and Electronics Engineering
Electrical, Electronic and Communications Engineering Technology/Technician
Elementary Education and Teaching
Engineering Technologies and Engineering-Related Fields, Other
Engineering Technology, General
Engineering, General
English Language and Literature, General
Entrepreneurship/Entrepreneurial Studies
Film/Cinema/Video Studies
Finance, General
Fine Arts and Art Studies, Other
Foreign Languages and Literatures, General
General Merchandising, Sales, and Related Marketing Operations, Other
General Studies
Graphic Design
Health Professions and Related Clinical Sciences, Other
Health Services/Allied Health/Health Sciences, General
History, General
Human Services, General
IllustrationInformation Science/Studies
Insurance
Intermedia/Multimedia
International Relations and Affairs
Jazz/Jazz Studies
Jewish/Judaic Studies
Legal Assistant/Paralegal
Legal Studies, General
Liberal Arts and Sciences/Liberal Studies
Management Information Systems, General
Mathematics Teacher Education
Mathematics, General
Mechanical Engineering
Mechanical Engineering/Mechanical Technology/Technician
Medical Radiologic Technology/Science - Radiation Therapist
Multi-/Interdisciplinary Studies, General
Music History, Literature, and Theory
Music Management
Music Performance, General
Music Teacher Education
Music, General
Music, Other
Painting
Philosophy
Photography
Physical Therapy/Therapist
Physics, General
Political Science and Government, General
Pre-Medicine/Pre-Medical Studies
Printmaking
Professional, Technical, Business, and Scientific Writing
Psychology, General
Registered Nursing/Registered Nurse
Respiratory Care Therapy/Therapist
Sculpture
Secondary Education and Teaching
Sociology
Special Education and Teaching, General
Speech Communication and Rhetoric
Women's StudiesAccounting
Advertising
African-American/Black Studies
American Sign Language (ASL)
Anthropology
Architecture
Art History, Criticism and Conservation
Art/Art Studies, General
Biochemistry
Bioengineering and Biomedical Engineering
Biology/Biological Sciences, General
Biotechnology
Business Administration and Management, General
Business Family and Consumer Sciences/Human Sciences
Business/Corporate Communications
Chemical Engineering
Chemistry, General
Chinese Language and Literature
Civil Engineering, General
Communication Sciences and Disorders, General
Computer Engineering Technology/Technician
Computer Engineering, General
Computer Graphics
Computer Systems Analysis/Analyst
Computer and Information Sciences, General
Construction Engineering Technology/Technician
Creative Writing
Dance, General
Drama and Dramatics/Theatre Arts, General
Economics, General
Electrical and Electronics Engineering
Electrical, Electronic and Communications Engineering Technology/Technician
English Language and Literature, General
Entrepreneurship/Entrepreneurial Studies
Environmental Design/Architecture
Environmental Science
Ethnic, Cultural Minority, Gender, and Group Studies, Other
Finance, General
Foreign Languages and Literatures, General
French Language and Literature
Geology/Earth Science, General
Geophysics and Seismology
Graphic Design
Health CommunicationHealth and Wellness, General
History, General
Hotel/Motel Administration/Management
Human Development and Family Studies, General
Human Nutrition
Human Resources Development
Industrial Engineering
Industrial and Product Design
Information Science/Studies
Interior Architecture
Italian Language and Literature
Journalism
Kinesiology and Exercise Science
Liberal Arts and Sciences/Liberal Studies
Linguistics
Management Information Systems, General
Marketing/Marketing Management, General
Mass Communication/Media Studies
Mathematical Biology
Mathematics, General
Mechanical Engineering
Mechanical Engineering/Mechanical Technology/Technician
Multi-/Interdisciplinary Studies, Other
Music Performance, General
Music, General
Operations Management and Supervision
Organizational Leadership
Painting
Petroleum Engineering
Philosophy
Photography
Physics, General
Political Science and Government, General
Psychology, General
Public Relations/Image Management
Radio and Television
Registered Nursing/Registered Nurse
Religion/Religious Studies
Sales, Distribution, and Marketing Operations, General
Sculpture
Sociology
Spanish Language and Literature
Speech Communication and Rhetoric
Sport and Fitness Administration/ManagementAccounting
African-American/Black Studies
Anthropology
Architecture
Architecture and Related Services, Other
Art History, Criticism and Conservation
Art Teacher Education
Biochemistry
Bioengineering and Biomedical Engineering
Biology Teacher Education
Biology/Biological Sciences, General
Business Administration and Management, General
Chemical Engineering
Chemistry Teacher Education
Chemistry, General
Cinematography and Film/Video Production
Civil Engineering, General
Classical, Ancient Mediterranean and Near Eastern Studies and Archaeology
Classics and Classical Languages, Literatures, and Linguistics, General
Communication, General
Computer Engineering, General
Computer Science
Criminal Justice/Safety Studies
Design and Applied Arts, Other
Dietetics/Dietitian
Drama and Dramatics/Theatre Arts, General
Economics, General
Electrical and Electronics Engineering
Elementary Education and Teaching
Engineering Physics/Applied Physics
Engineering/Industrial Management
English Language and Literature, General
English/Language Arts Teacher Education
Entrepreneurship/Entrepreneurial Studies
Environmental Science
Ethnic, Cultural Minority, Gender, and Group Studies, Other
Film/Video and Photographic Arts, Other
Finance, General
Fine/Studio Arts, General
French Language Teacher Education
French Language and Literature
Geology/Earth Science, General
German Language Teacher EducationGerman Studies
Graphic Design
Health Information/Medical Records Administration/Administrator
History Teacher Education
History, General
Industrial Engineering
Industrial and Product Design
Information Science/Studies
Italian Language and Literature
Kinesiology and Exercise Science
Latin American Studies
Management Science
Marketing/Marketing Management, General
Mathematics Teacher Education
Mathematics and Computer Science
Mathematics, General
Mechanical Engineering
Music, General
Neuroscience
Nursing Science
Nutrition Sciences
Painting
Philosophy
Photography
Physics Teacher Education
Physics, General
Polish Language and Literature
Political Science and Government, General
Pre-Dentistry Studies
Pre-Veterinary Studies
Psychology, General
Registered Nursing/Registered Nurse
Romance Languages, Literatures, and Linguistics, General
Russian Language and Literature
Slavic Languages, Literatures, and Linguistics, General
Social Work
Sociology
Spanish Language Teacher Education
Spanish Language and Literature
Speech Communication and Rhetoric
Statistics, General
Urban Studies/Affairs
Women's StudiesAccounting
Agricultural Economics
Agricultural Engineering
Agricultural Public Services, Other
Agriculture, Agriculture Operations, and Related Sciences, Other
Agronomy and Crop Science
American/United States Studies/Civilization
Animal Sciences, General
Anthropology
Apparel and Textiles, General
Architecture
Art History, Criticism and Conservation
Art Teacher Education
Arts, Entertainment, and Media Management, General
Audiology/Audiologist and Speech-Language Pathology/Pathologist
Biology/Biological Sciences, General
Biotechnology
Business/Commerce, General
Business/Managerial Economics
Chemical Engineering
Chemistry, General
Chinese Language and Literature
Civil Engineering, General
Classics and Classical Languages, Literatures, and Linguistics, General
Clinical Laboratory Science/Medical Technology/Technologist
Computer Engineering, General
Computer and Information Sciences, General
Dance, General
Digital Arts
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
Economics, General
Electrical and Electronics Engineering
Elementary Education and Teaching
English Language and Literature, General
Environmental Studies
Ethnic, Cultural Minority, Gender, and Group Studies, Other
Family and Consumer Sciences/Human Sciences, General
Finance, General
Financial Mathematics
Fine/Studio Arts, General
Food Science
Foods, Nutrition, and Wellness Studies, General
Forest Sciences and Biology
French Language and Literature
General Studies
Geography
Geology/Earth Science, General
German Language and Literature
Health Services/Allied Health/Health Sciences, General
Health Teacher Education
Health/Health Care Administration/ManagementHistory, General
Horse Husbandry/Equine Science and Management
Hospitality Administration/Management, General
Human Nutrition
Information Science/Studies
Interior Design
International/Global Studies
Japanese Language and Literature
Journalism
Junior High/Intermediate/Middle School Education and Teaching
Landscape Architecture
Latin American Studies
Liberal Arts and Sciences/Liberal Studies
Linguistic, Comparative, and Related Language Studies and Services, Other
Linguistics
Management Science
Marketing/Marketing Management, General
Materials Engineering
Mathematics and Computer Science
Mathematics, General
Mechanical Engineering
Mining and Mineral Engineering
Multi-/Interdisciplinary Studies, General
Multi-/Interdisciplinary Studies, Other
Music History, Literature, and Theory
Music Performance, General
Music Teacher Education
Natural Resources/Conservation, General
Neuroscience
Philosophy
Physical Education Teaching and Coaching
Physician Assistant
Physics, General
Political Science and Government, General
Pre-Physical Therapy Studies
Psychology, General
Public Health, General
Public Relations, Advertising, and Applied Communication
Radio and Television
Registered Nursing/Registered Nurse
Rhetoric and Composition
Russian Language and Literature
Science Teacher Education/General Science Teacher Education
Social Studies Teacher Education
Social Work
Sociology
Spanish Language and Literature
Special Education and Teaching, General
Speech Communication and Rhetoric
Teacher Education and Professional Development, Specific Subject Areas, Other
Technical Teacher EducationAccounting
Agroecology and Sustainable Agriculture
Animal Sciences, General
Anthropology
Applied Horticulture/Horticulture Operations, General
Art History, Criticism and Conservation
Art Teacher Education
Athletic Training/Trainer
Biochemistry
Bioengineering and Biomedical Engineering
Biology Teacher Education
Biology/Biological Sciences, General
Botany/Plant Biology
Business Administration and Management, General
Chemical Engineering
Chemistry Teacher Education
Chemistry, General
Civil Engineering Technology/Technician
Civil Engineering, General
Clinical Laboratory Science/Medical Technology/Technologist
Communication Sciences and Disorders, General
Communication, General
Computer Engineering, General
Computer Science
Digital Communication and Media/Multimedia
Drama and Dramatics/Theatre Arts, General
Economics, General
Economics, Other
Electrical and Electronics Engineering
Electrical, Electronic and Communications Engineering Technology/Technician
Elementary Education and Teaching
Engineering Physics/Applied Physics
English Language and Literature, General
English/Language Arts Teacher Education
Environmental Science
Finance, General
Fine/Studio Arts, General
Food Science
Foreign Language Teacher Education
Forestry, General
French Language Teacher EducationFrench Language and Literature
Geology/Earth Science, General
History Teacher Education
History, General
Human Development and Family Studies, General
International Relations and Affairs
Journalism
Liberal Arts and Sciences/Liberal Studies
Marine Sciences
Marketing/Marketing Management, General
Mass Communication/Media Studies
Mathematics Teacher Education
Mathematics, General
Mechanical Engineering
Mechanical Engineering/Mechanical Technology/Technician
Microbiology, General
Molecular Biology
Multi-/Interdisciplinary Studies, Other
Music Performance, General
Music Teacher Education
Music, General
Parks, Recreation and Leisure Facilities Management, General
Philosophy
Physical Education Teaching and Coaching
Physics, General
Political Science and Government, General
Psychology, General
Registered Nursing/Registered Nurse
Romance Languages, Literatures, and Linguistics, Other
Science Teacher Education/General Science Teacher Education
Secondary Education and Teaching
Social Studies Teacher Education
Social Work
Sociology
Spanish Language Teacher Education
Spanish Language and Literature
Statistics, General
Surveying Technology/Surveying
Wildlife, Fish and Wildlands Science and Management
Women's Studies
Zoology/Animal BiologyAccounting
African-American/Black Studies
Agroecology and Sustainable Agriculture
Animal Sciences, General
Anthropology
Applied Economics
Applied Horticulture/Horticulture Operations, General
Architectural and Building Sciences/Technology
Art History, Criticism and Conservation
Astronomy
Biochemistry and Molecular Biology
Bioengineering and Biomedical Engineering
Biological and Physical Sciences
Biology/Biological Sciences, General
Business Administration and Management, General
Business/Managerial Economics
Chemical Engineering
Chemistry, General
Chinese Language and Literature
Civil Engineering, General
Classics and Classical Languages, Literatures, and Linguistics, General
Communication Sciences and Disorders, General
Communication, General
Comparative Literature
Computer Engineering, General
Computer Science
Dance, General
Drama and Dramatics/Theatre Arts, General
Economics, General
Education, General
Electrical and Electronics Engineering
English Language and Literature, General
Environmental Design/Architecture
Environmental Science
Exercise Physiology
Finance, General
Fine/Studio Arts, General
Food Science
French Language and Literature
General Studies
Geography
Geology/Earth Science, General
German StudiesHistory, General
Hospitality Administration/Management, General
Humanities/Humanistic Studies
Industrial Engineering
Informatics
Italian Language and Literature
Japanese Language and Literature
Jewish/Judaic Studies
Journalism
Landscape Architecture
Legal Studies, General
Liberal Arts and Sciences, General Studies and Humanities, Other
Linguistics
Logistics, Materials, and Supply Chain Management
Marketing/Marketing Management, General
Mathematics and Computer Science
Mathematics, General
Mechanical Engineering
Microbiology, General
Multi-/Interdisciplinary Studies, Other
Music Performance, General
Music, General
Natural Resources/Conservation, General
Near and Middle Eastern Studies
Nutrition Sciences
Philosophy
Physics, General
Plant Sciences, General
Political Science and Government, General
Portuguese Language and Literature
Pre-Veterinary Studies
Psychology, General
Public Health, General
Registered Nursing/Registered Nurse
Russian Studies
Social Sciences, Other
Sociology
Spanish Language and Literature
Sport and Fitness Administration/Management
Turf and Turfgrass Management
Veterinary/Animal Health Technology/Technician and Veterinary Assistant
Women's StudiesAccounting
African-American/Black Studies
American Government and Politics (United States)
American Indian/Native American Studies
Anthropology
Art/Art Studies, General
Asian Studies/Civilization
Astronomy
Athletic Training/Trainer
Audiology/Audiologist and Speech-Language Pathology/Pathologist
Biochemistry
Biology/Biological Sciences, General
Business/Commerce, General
Chemistry, General
Cinematography and Film/Video Production
Classics and Classical Languages, Literatures, and Linguistics, General
Clinical Laboratory Science/Medical Technology/Technologist
Clinical/Medical Laboratory Technician
Computer Science
Computer and Information Sciences, General
Creative Writing
Dance, General
Drama and Dramatics/Theatre Arts, General
East Asian Studies
Economics, General
Education, General
Elementary Education and Teaching
English Language and Literature, General
Environmental Studies
Finance, General
Forest Management/Forest Resources Management
Forestry, General
Forestry, Other
French Language and Literature
Geography
Geology/Earth Science, GeneralGerman Language and Literature
History, General
International Business/Trade/Commerce
Japanese Language and Literature
Journalism
Legal Studies, General
Liberal Arts and Sciences/Liberal Studies
Management Information Systems, General
Marketing/Marketing Management, General
Mathematics, General
Medical Microbiology and Bacteriology
Multi-/Interdisciplinary Studies, General
Music, General
Natural Resources/Conservation, General
Neuroscience
Parks, Recreation and Leisure Studies
Pharmaceutics and Drug Design
Pharmacy
Philosophy
Physical Education Teaching and Coaching
Physics, General
Pre-Engineering
Pre-Law Studies
Pre-Medicine/Pre-Medical Studies
Pre-Nursing Studies
Pre-Pharmacy Studies
Pre-Physical Therapy Studies
Psychology, General
Russian Language and Literature
Social Work
Sociology
Spanish Language and Literature
Speech Communication and Rhetoric
Wildlife, Fish and Wildlands Science and Management
Women's StudiesAccounting
Agriculture, General
Anthropology
Art History, Criticism and Conservation
Art/Art Studies, General
Atmospheric Sciences and Meteorology, General
Biochemistry
Bioengineering and Biomedical Engineering
Biology/Biological Sciences, General
Biotechnology
Business Administration and Management, General
Business/Commerce, General
Business/Managerial Economics
Chemical Engineering
Civil Engineering, General
Computer Engineering, General
Computer Science
Computer and Information Sciences, General
Criminology
Dance, General
Drama and Dramatics/Theatre Arts, General
Education, Other
Electrical and Electronics Engineering
Elementary Education and Teaching
Engineering Physics/Applied Physics
English Language and Literature, General
Environmental Science
Environmental/Environmental Health Engineering
Finance, General
Forest Management/Forest Resources Management
French Language and Literature
General Studies
Geography
Geological/Geophysical EngineeringGeology/Earth Science, General
Geophysics and Seismology
Health and Wellness, General
History, General
Human Development and Family Studies, General
International Business/Trade/Commerce
International Relations and Affairs
Journalism
Marketing/Marketing Management, General
Mathematics, General
Mechanical Engineering
Metallurgical Engineering
Microbiology and Immunology
Mining and Mineral Engineering
Music Performance, General
Music Teacher Education
Music, General
Neuroscience
Nutrition Sciences
Philosophy
Physics, General
Political Science and Government, General
Pre-Veterinary Studies
Psychology, General
Range Science and Management
Registered Nursing/Registered Nurse
Social Work
Sociology
Spanish Language and Literature
Speech Communication and Rhetoric
Speech-Language Pathology/Pathologist
Water Resources Engineering
Wildlife, Fish and Wildlands Science and Management
Women's StudiesAccounting
Acting
African-American/Black Studies
Anthropology
Architecture
Art History, Criticism and Conservation
Art/Art Studies, General
Asian Studies/Civilization
Athletic Training/Trainer
Biochemistry
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Civil Engineering, General
Computer Engineering, General
Computer Science
Construction Management
Criminal Justice/Safety Studies
Culinary Arts and Related Services, Other
Dance, General
Drama and Dramatics/Theatre Arts, General
Early Childhood Education and Teaching
Economics, General
Education, General
Electrical and Electronics Engineering
Elementary Education and Teaching
Engineering, General
English Language and Literature, General
Entrepreneurship/Entrepreneurial Studies
Environmental Studies
Film/Cinema/Video Studies
Finance, General
French Language and Literature
Geology/Earth Science, General
German Language and Literature
Graphic Design
Health Teacher Education
Health/Health Care Administration/Management
Health/Medical Physics
History, General
Hospitality Administration/Management, General
Hospitality Administration/Management, OtherHuman Services, General
Information Science/Studies
Interior Architecture
International Business/Trade/Commerce
Kinesiology and Exercise Science
Landscape Architecture
Latin American Studies
Liberal Arts and Sciences/Liberal Studies
Linguistics
Management Information Systems, General
Marketing/Marketing Management, General
Mass Communication/Media Studies
Mathematics, General
Mechanical Engineering
Medical Radiologic Technology/Science - Radiation Therapist
Multi-/Interdisciplinary Studies, Other
Music, General
Nuclear Medical Technology/Technologist
Nutrition Sciences
Parks, Recreation and Leisure Studies
Philosophy
Physics, General
Political Science and Government, General
Psychology, General
Public Administration
Public Health, General
Real Estate
Registered Nursing/Registered Nurse
Restaurant/Food Services Management
Romance Languages, Literatures, and Linguistics, Other
Science Teacher Education/General Science Teacher Education
Secondary Education and Teaching
Social Sciences, General
Social Work
Sociology
Spanish Language Teacher Education
Spanish Language and Literature
Special Education and Teaching, General
Speech Communication and Rhetoric
Technical Theatre/Theatre Design and Technology
Urban Education and Leadership
Women's StudiesAccounting
African Studies
American/United States Studies/Civilization
Ancient Studies/Civilization
Ancient/Classical Greek Language and Literature
Anthropology
Area Studies, Other
Art History, Criticism and Conservation
Asian Studies/Civilization
Bioethics/Medical Ethics
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Chinese Studies
Cognitive Science
Computer and Information Sciences, General
Criminal Justice/Safety Studies
Dance, General
Development Economics and International Development
Drama and Dramatics/Theatre Arts, General
Econometrics and Quantitative Economics
Economics, General
Economics, Other
English Language and Literature, General
Environmental Studies
European Studies/Civilization
Film/Cinema/Video Studies
Fine/Studio Arts, GeneralFrench Language and Literature
Geography
German Studies
History, General
Humanities/Humanistic Studies
International Economics
International Relations and Affairs
Italian Studies
Journalism
Latin American Studies
Latin Language and Literature
Mathematics, General
Molecular Biochemistry
Multi-/Interdisciplinary Studies, Other
Music, General
Near and Middle Eastern Studies
Organizational Behavior Studies
Philosophy
Physics, General
Political Science and Government, General
Psychology, General
Religion/Religious Studies
Rhetoric and Composition
Russian Studies
Sociology
Spanish Language and Literature
Women's StudiesAccounting
Anthropology
Architectural History and Criticism, General
Art History, Criticism and Conservation
Art/Art Studies, General
Biochemistry
Biology/Biological Sciences, General
Biophysics
Business Administration and Management, General
Business/Managerial Economics
Chemistry, General
Communication, General
Computer Science
Drama and Dramatics/Theatre Arts, General
Economics, General
Electrical and Electronics Engineering
Engineering, General
English Language and Literature, General
Environmental Science
Ethnic Studies
Finance, GeneralFrench Language and Literature
History, General
Humanities/Humanistic Studies
Industrial Engineering
International Business/Trade/Commerce
International Relations and Affairs
Italian Studies
Liberal Arts and Sciences/Liberal Studies
Marketing/Marketing Management, General
Mathematics, General
Mechanical Engineering
Music, General
Neuroscience
Philosophy
Physics, General
Political Science and Government, General
Psychology, General
Real Estate
Religion/Religious Studies
Sociology
Spanish Language and LiteratureAccounting
Anthropology
Applied Mathematics, General
Architecture
Architecture and Related Services, Other
Art History, Criticism and Conservation
Art/Art Studies, General
Asian Studies/Civilization
Athletic Training/Trainer
Atmospheric Sciences and Meteorology, General
Audiology/Audiologist and Speech-Language Pathology/Pathologist
Ballet
Bioengineering and Biomedical Engineering
Biology/Biological Sciences, General
Business Administration and Management, General
Business/Commerce, General
Chemical Engineering
Chemistry, General
Chinese Language and Literature
Civil Engineering, General
Classics and Classical Languages, Literatures, and Linguistics, General
Clinical Laboratory Science/Medical Technology/Technologist
Communication, General
Comparative Literature
Computer Engineering, General
Computer Science
Consumer Economics
Dance, General
Drama and Dramatics/Theatre Arts, General
Economics, General
Education, General
Electrical and Electronics Engineering
Elementary Education and Teaching
Engineering, General
English Language and Literature, General
Entrepreneurship/Entrepreneurial Studies
Environmental Studies
Ethnic, Cultural Minority, Gender, and Group Studies, Other
Film/Cinema/Video Studies
Finance, General
French Language and Literature
Geographic Information Science and Cartography
Geological and Earth Sciences/Geosciences, OtherGeological/Geophysical Engineering
Geology/Earth Science, General
Geophysics and Seismology
German Language and Literature
Health Services/Allied Health/Health Sciences, General
Health and Physical Education/Fitness, General
History, General
Human Development and Family Studies, General
Information Science/Studies
International/Global Studies
Kinesiology and Exercise Science
Latin American Studies
Liberal Arts and Sciences, General Studies and Humanities, Other
Marketing/Marketing Management, General
Materials Engineering
Mathematics, General
Mechanical Engineering
Metallurgical Engineering
Mining and Mineral Engineering
Music, General
Near and Middle Eastern Studies
Operations Management and Supervision
Parks, Recreation and Leisure Studies
Peace Studies and Conflict Resolution
Philosophy
Physical Sciences
Physical Sciences, Other
Physics, General
Political Science and Government, General
Psychology, General
Religion/Religious Studies
Rhetoric and Composition
Russian Language and Literature
Social Science Teacher Education
Social Sciences, General
Social Work
Sociology
Spanish Language and Literature
Special Education and Teaching, General
Urban Studies/Affairs
Visual and Performing Arts, General
Women's StudiesAccounting
Aeronautical/Aerospace Engineering Technology/Technician
Aerospace, Aeronautical and Astronautical/Space Engineering
Agricultural Business and Management, General
Agricultural Business and Management, Other
Agricultural Economics
Agricultural Engineering
Agricultural Teacher Education
Agriculture, General
Agronomy and Crop Science
American/United States Studies/Civilization
Animal Physiology
Animal Sciences, General
Anthropology
Area Studies, Other
Art/Art Studies, General
Asian Studies/Civilization
Audiology/Audiologist and Speech-Language Pathology/Pathologist
Biological and Biomedical Sciences, Other
Biology Teacher Education
Biology/Biological Sciences, General
Botany/Plant Biology
Business Administration and Management, General
Business Teacher Education
Business/Commerce, General
Chemistry Teacher Education
Chemistry, General
Civil Engineering, General
Clinical Laboratory Science/Medical Technology/Technologist
Computer Engineering Technology/Technician
Computer Engineering, General
Computer and Information Sciences and Support Services, Other
Computer and Information Sciences, General
Curriculum and Instruction
Dairy Science
Dance, General
Drama and Dramatics/Theatre Arts, General
Ecology
Economics, General
Electrical and Electronics Engineering
Elementary Education and Teaching
English Language and Literature, General
Entomology
Environmental/Environmental Health Engineering
Family and Consumer Economics and Related Services, Other
Family and Consumer Sciences/Home Economics Teacher Education
Fashion Merchandising
Finance, General
Foods, Nutrition, and Related Services, Other
Forestry, General
Forestry, Other
French Language and Literature
Geography
Geology/Earth Science, General
German Language and Literature
Health Teacher Education
History, GeneralHorticultural Science
Housing and Human Environments, General
Human Development and Family Studies, General
Human Resources Management/Personnel Administration, General
Information Science/Studies
Interior Design
International Agriculture
Journalism
Kindergarten/Preschool Education and Teaching
Landscape Architecture
Liberal Arts and Sciences/Liberal Studies
Marketing/Marketing Management, General
Mathematics Teacher Education
Mathematics, General
Mechanical Engineering
Medical Microbiology and Bacteriology
Multi-/Interdisciplinary Studies, Other
Music Teacher Education
Music Therapy/Therapist
Music, General
Natural Resources and Conservation, Other
Operations Management and Supervision
Parks, Recreation and Leisure Studies
Parks, Recreation, Leisure, and Fitness Studies, Other
Philosophy
Physical Education Teaching and Coaching
Physics Teacher Education
Physics, General
Plant Sciences, General
Plant Sciences, Other
Political Science and Government, General
Pre-Dentistry Studies
Pre-Law Studies
Pre-Medicine/Pre-Medical Studies
Pre-Veterinary Studies
Psychology, General
Public Health, Other
Range Science and Management
Rhetoric and Composition
Sales and Marketing Operations/Marketing and Distribution Teacher Education
Science Teacher Education/General Science Teacher Education
Secondary Education and Teaching
Social Studies Teacher Education
Social Work
Sociology
Soil Science and Agronomy, General
Spanish Language and Literature
Special Education and Teaching, General
Statistics, General
Teacher Education and Professional Development, Specific Subject Areas, Other
Teacher Education, Multiple Levels
Technical Teacher Education
Technology Teacher Education/Industrial Arts Teacher Education
Tool and Die Technology/Technician
Wildlife, Fish and Wildlands Science and Management
Zoology/Animal BiologyAfrican Studies
American/United States Studies/Civilization
Anthropology
Art History, Criticism and Conservation
Asian Studies/Civilization
Astronomy
Biochemistry
Biology/Biological Sciences, General
Chemistry, General
Chinese Language and Literature
Classics and Classical Languages, Literatures, and Linguistics, General
Cognitive Psychology and Psycholinguistics
Computer and Information Sciences, General
Drama and Dramatics/Theatre Arts, General
Economics, General
Education, General
English Language and Literature, General
Environmental Science
Environmental Studies
Film/Cinema/Video Studies
Fine/Studio Arts, General
French Language and Literature
Geography
Geology/Earth Science, General
German Language and Literature
History, GeneralInternational Relations and Affairs
Italian Language and Literature
Japanese Language and Literature
Jewish/Judaic Studies
Latin American Studies
Liberal Arts and Sciences, General Studies and Humanities, Other
Mass Communication/Media Studies
Mathematics, General
Medieval and Renaissance Studies
Multi-/Interdisciplinary Studies, General
Multi-/Interdisciplinary Studies, Other
Music, General
Philosophy
Physics, General
Physiological Psychology/Psychobiology
Political Science and Government, General
Religion/Religious Studies
Research and Experimental Psychology, Other
Russian Language and Literature
Science, Technology and Society
Sociology
Spanish Language and Literature
Urban Studies/Affairs
Visual and Performing Arts, General
Women's StudiesAccounting
Anthropology
Art/Art Studies, General
Biology/Biological Sciences, General
Biopsychology
Business Administration and Management, General
Chemistry, General
Computer Science
Computer and Information Sciences, Other
Drama and Dramatics/Theatre Arts, General
Economics, General
Education, General
Elementary Education and Teaching
English Language and Literature, General
Finance, General
Fine and Studio Arts Management
French Studies
History, General
International Relations and AffairsKindergarten/Preschool Education and Teaching
Mathematics, General
Medical Microbiology and Bacteriology
Music, General
Philosophy
Physician Assistant
Physics, General
Political Science and Government, General
Pre-Dentistry Studies
Pre-Engineering
Pre-Law Studies
Pre-Medicine/Pre-Medical Studies
Psychology, General
Public Administration
Public Policy Analysis, General
Registered Nursing/Registered Nurse
Secondary Education and Teaching
Sociology
Spanish Language and LiteratureAccounting
Art Teacher Education
Art/Art Studies, General
Biochemistry
Biology/Biological Sciences, General
Biophysics
Business/Commerce, General
Chemistry, General
Communication and Media Studies, Other
Economics, General
Economics, Other
Education, General
English Language and Literature, General
Environmental Science
Environmental Studies
French Language and Literature
German Language and LiteratureHistory, General
Information Technology
International Business/Trade/Commerce
International/Global Studies
Mathematics, General
Multi-/Interdisciplinary Studies, Other
Music, General
Neuroscience
Philosophy
Physics, General
Political Science and Government, General
Psychology, General
Public Policy Analysis, General
Sociology
Spanish Language and Literature
Women's StudiesAnthropology
Art Teacher Education
Art/Art Studies, General
Biology/Biological Sciences, General
Business/Commerce, General
Business/Managerial Economics
Chemistry, General
Computer Science
Computer and Information Sciences, General
Drama and Dramatics/Theatre Arts, General
Economics, General
Education, General
Elementary Education and Teaching
Engineering Physics/Applied Physics
English Language and Literature, General
English/Language Arts Teacher Education
French Language and Literature
History, General
Kinesiology and Exercise Science
Liberal Arts and Sciences/Liberal Studies
Mathematics Teacher Education
Mathematics, GeneralMechanical Engineering
Modern Languages
Music, General
Neuroscience
Philosophy
Physical Education Teaching and Coaching
Physics, General
Political Science and Government, General
Pre-Dentistry Studies
Pre-Law Studies
Pre-Medicine/Pre-Medical Studies
Pre-Pharmacy Studies
Pre-Theology/Pre-Ministerial Studies
Pre-Veterinary Studies
Psychology, General
Religion/Religious Studies
Secondary Education and Teaching
Social Science Teacher Education
Social Sciences, General
Sociology
Spanish Language and Literature
Speech Communication and RhetoricAccounting
Biochemistry
Biology/Biological Sciences, General
Business Administration and Management, General
Chemistry, General
Civil Engineering, General
Computational and Applied Mathematics
Digital Communication and Media/Multimedia
Drama and Dramatics/Theatre Arts, General
Economics, General
Elementary Education and Teaching
English Language and Literature, General
History, General
International Relations and Affairs
Liberal Arts and Sciences/Liberal Studies
Mathematics, General
Molecular BiologyMulti-/Interdisciplinary Studies, Other
Music Performance, General
Music, General
Musical Theatre
Non-Profit/Public/Organizational Management
Philosophy
Philosophy and Religious Studies, Other
Physics, General
Political Science and Government, General
Psychology, General
Public Relations, Advertising, and Applied Communication
Registered Nursing/Registered Nurse
Secondary Education and Teaching
Spanish Language and Literature
Speech Communication and Rhetoric
Speech Teacher Education
Teacher Education, Multiple LevelsAmerican/United States Studies/Civilization
Anthropology
Area Studies, Other
Art History, Criticism and Conservation
Art/Art Studies, General
Asian Studies/Civilization
Astronomy
Astrophysics
Biology/Biological Sciences, General
Chemistry, General
Chinese Language and Literature
Classics and Classical Languages, Literatures, and Linguistics, General
Comparative Literature
Computer Science
Development Economics and International Development
Drama and Dramatics/Theatre Arts, General
Econometrics and Quantitative Economics
English Language and Literature, General
Environmental Science
Environmental Studies
Ethnic, Cultural Minority, Gender, and Group Studies, OtherFrench Language and Literature
Geology/Earth Science, General
German Language and Literature
History, General
Japanese Language and Literature
Mathematics, General
Multi-/Interdisciplinary Studies, Other
Music, General
Near and Middle Eastern Studies
Philosophy
Physics, General
Political Economy
Political Science and Government, General
Psychology, General
Religion/Religious Studies
Russian Language and Literature
Social Sciences, Other
Sociology
Spanish Language and Literature
Statistics, General
Women's Studies`

majorsArray = allMajors.split("\n")
uniqueMajors = new Set(majorsArray)
//console.log(majorsArray.length, uniqueMajors.size)
majorsArray = Array.from(uniqueMajors).sort()
majorsShort= majorsArray.filter(item=>item.length < 20)
console.log(util.inspect(majorsShort, { maxArrayLength: null }))
