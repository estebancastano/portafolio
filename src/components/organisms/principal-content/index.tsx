import React from 'react'
import Header from '@/components/organisms/header/index'
import TextFooter from '@/components/organisms/footer-section/index'
import KnowledgeCard from '@/components/organisms/knowledge-section/index'
import EducationCard from '@/components/organisms/education-section/'
import PortfolioCard from '@/components/molecules/portfolio-card/'
function PrincipalContent() {
    return (
        <div className=''>
            <div className='shadow-md'>
                <Header />
            </div>
            <div>
                <KnowledgeCard />
            </div>
            <div>
                <EducationCard />
            </div>
            <div className='pb-4'>
                <PortfolioCard/>
            </div>
            <div>
                <TextFooter />
            </div>
        </div>
    )
}

export default PrincipalContent