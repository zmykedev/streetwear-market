import React from 'react'
import { Badge } from '../ui/badge'

export const Skills: React.FunctionComponent = () => {
    return (
        <div data-aos="fade-left" className="w-full xl:h-[250px] ">
            <div className="flex justify-center">
                <div className="w-[50%] flex flex-col">
                    <h2 className="text-xl font-semibold self-start mb-4">
                        Skills
                    </h2>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        <Badge className="rounded-xl" variant="secondary">
                            Node.js
                        </Badge>
                        <Badge className="rounded-xl" variant="secondary">
                            HTML
                        </Badge>
                        <Badge className="rounded-xl" variant="secondary">
                            CSS
                        </Badge>
                        <Badge className="rounded-xl" variant="secondary">
                            JavaScript
                        </Badge>
                        <Badge className="rounded-xl" variant="secondary">
                            TypeScript
                        </Badge>
                        <Badge className="rounded-xl" variant="secondary">
                            React.js
                        </Badge>
                        <Badge className="rounded-xl" variant="secondary">
                            TailwindCSS
                        </Badge>
                        <Badge className="rounded-xl" variant="secondary">
                            UI/UX Design
                        </Badge>
                        <Badge className="rounded-xl" variant="secondary">
                            Web Development
                        </Badge>
                        <Badge className="rounded-xl" variant="secondary">
                            CI/CD
                        </Badge>
                        <Badge className="rounded-xl" variant="secondary">
                            Git
                        </Badge>
                        <Badge className="rounded-xl" variant="secondary">
                            Critical Thinker
                        </Badge>{' '}
                        <Badge className="rounded-xl" variant="secondary">
                            Effective Communicator
                        </Badge>{' '}
                        <Badge className="rounded-xl" variant="secondary">
                            Organized Achiever
                        </Badge>
                        <Badge className="rounded-xl" variant="secondary">
                            Adaptable Learner
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}
