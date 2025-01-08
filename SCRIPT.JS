document.addEventListener('DOMContentLoaded', function() {
    const universitySelect = document.getElementById('university-select');
    const branchSelect = document.getElementById('branch-select');
    const semesterSelect = document.getElementById('semester-select');
    const subjectList = document.getElementById('subject-list');

  function updateSubjects() {
        subjectList.innerHTML = '';

        const selectedUniversity = universitySelect.value;
        const selectedBranch = branchSelect.value;
        const selectedSemester = semesterSelect.value;

        if (!selectedUniversity || !selectedBranch || !selectedSemester) return;

      // Replace with your database lookups or data loading mechanism.
      let subjects = getSubjectsFromData(selectedUniversity, selectedBranch, selectedSemester);
      if (subjects.length > 0) {
            subjects.forEach(subject => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span>${subject.name}</span>
                     <div>
                            <a href="${subject.studyNotes}">Study Notes</a>
                             <a href="${subject.videoLectures}">Video Lectures</a>
                             <a href="${subject.previousYearPapers}">Previous Year Papers</a>
                             <a href="${subject.quizzes}">Quizzes</a>
                             <a href="${subject.importantTopics}">Important Topics</a>
                        </div>

                    `;
                subjectList.appendChild(listItem);
            });
        }
    else {
            subjectList.innerHTML = "<p>No subjects found for your selection.</p>";
        }
    }

    function getSubjectsFromData(university, branch, semester){
        // This data should ideally be fetched from an API/Database
      const data = {
            'ipu': {
                'cse': {
                    '1': [
                        { name: 'Applied Maths - 1', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                        { name: 'Applied Physics - 1', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                         { name: 'EVS', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                        { name: 'Electrical Science', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                          { name: 'Manufacturing Processes', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                          { name: 'Applied Chemistry', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                          { name: 'Programming in C', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},

                      ],
                    '3': [
                        { name: 'Data Structures', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                        { name: 'Operating Systems', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'}
                    ]
                },
              'mech': {
                '1': [
                      { name: 'Applied Maths - 1', studyNotes: 'https://www.google.com', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                        { name: 'Applied Physics - 1', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                         { name: 'EVS', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                        { name: 'Electrical Science', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                          { name: 'Manufacturing Processes', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                          { name: 'Applied Chemistry', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                          { name: 'Programming in C', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},

                    ]
              },
               'civil': {
                '1': [
                     { name: 'Applied Maths - 1', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                        { name: 'Applied Physics - 1', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                         { name: 'EVS', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                        { name: 'Electrical Science', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                          { name: 'Manufacturing Processes', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                          { name: 'Applied Chemistry', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                          { name: 'Programming in C', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                    ]
              },
             'ece': {
                '1': [
                  { name: 'Applied Maths - 1', studyNotes: '', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                        { name: 'Applied Physics - 1', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                         { name: 'EVS', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                        { name: 'Electrical Science', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                          { name: 'Manufacturing Processes', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                          { name: 'Applied Chemistry', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                          { name: 'Programming in C', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'},
                    ]
              },
              },
            'dtu': {
                'cse': {
                  '1': [
                    { name: 'Computer Programming', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#' },
                    { name: 'Calculus', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#' }
                    ],
                    '2': [
                        { name: 'Object Oriented Programming', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#'}
                        ]
                }
            } ,
            'nsut':{
              'ece': {
                  '1': [
                    { name: 'Basic Electronics', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#' },
                    { name: 'Electric Circuit Analysis', studyNotes: '#', videoLectures: '#', previousYearPapers: '#', quizzes: '#', importantTopics: '#' }
                  ]
                }
              }
          };

        return (data[university] && data[university][branch] && data[university][branch][semester]) || [];

    }

    universitySelect.addEventListener('change', updateSubjects);
    branchSelect.addEventListener('change', updateSubjects);
    semesterSelect.addEventListener('change', updateSubjects);
  
    // Pre-populate for IPU first sem for all branches
    universitySelect.value = 'ipu';
    branchSelect.value = 'cse';
    semesterSelect.value = '1';
    updateSubjects();

});