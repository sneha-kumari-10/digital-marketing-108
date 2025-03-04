import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Search,
  ChevronDown,
  Search as SearchIcon,
  FileText,
  Share2,
  MousePointer2,
  Mail,
  HelpCircle
} from "lucide-react"

const Fnq = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [openSection, setOpenSection] = useState<string | null>("seo")
  const [openQuestions, setOpenQuestions] = useState<string[]>([])

  const faqSections = [
    {
      id: "seo",
      title: "Search Engine Optimization",
      icon: SearchIcon,
      questions: [
        {
          id: "seo-1",
          question: "What is SEO and why is it important?",
          answer: "SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results. It's crucial because it increases your visibility, drives organic traffic, and helps you reach potential customers without paid advertising."
        },
        {
          id: "seo-2",
          question: "How long does it take to see SEO results?",
          answer: "SEO is a long-term strategy that typically takes 3-6 months to show significant results. The timeline depends on factors like competition, content quality, website authority, and your target keywords."
        },
        {
          id: "seo-3",
          question: "What are the key factors for SEO success?",
          answer: "Key SEO factors include quality content, relevant keywords, technical optimization, mobile-friendliness, page speed, backlinks from reputable sites, and user experience metrics."
        }
      ]
    },
    {
      id: "content",
      title: "Content Marketing",
      icon: FileText,
      questions: [
        {
          id: "content-1",
          question: "How do I create engaging content?",
          answer: "Create engaging content by understanding your audience, addressing their pain points, using compelling visuals, telling stories, and providing actionable insights. Focus on quality over quantity and maintain consistency in your brand voice."
        },
        {
          id: "content-2",
          question: "What types of content work best?",
          answer: "Effective content types include blog posts, videos, infographics, case studies, whitepapers, podcasts, and social media posts. The best mix depends on your target audience and business goals."
        },
        {
          id: "content-3",
          question: "How often should I publish new content?",
          answer: "Publishing frequency depends on your resources and audience needs. Quality is more important than quantity. A consistent schedule, whether it's weekly or monthly, helps build audience expectations and SEO value."
        }
      ]
    },
    {
      id: "social",
      title: "Social Media Marketing",
      icon: Share2,
      questions: [
        {
          id: "social-1",
          question: "Which social platforms should I focus on?",
          answer: "Choose platforms where your target audience is most active. B2B companies often succeed on LinkedIn, while B2C brands might focus on Instagram or TikTok. Start with 2-3 platforms and master them before expanding."
        },
        {
          id: "social-2",
          question: "How do I increase social media engagement?",
          answer: "Boost engagement by posting interactive content, asking questions, running polls/contests, responding to comments, using relevant hashtags, and sharing user-generated content. Timing and consistency are also crucial."
        },
        {
          id: "social-3",
          question: "What's the best time to post on social media?",
          answer: "Optimal posting times vary by platform and audience. Generally, weekdays during business hours work well for B2B, while evenings and weekends are better for B2C. Use your analytics to find when your audience is most active."
        }
      ]
    },
    {
      id: "ppc",
      title: "Pay-Per-Click Advertising",
      icon: MousePointer2,
      questions: [
        {
          id: "ppc-1",
          question: "How do I optimize my PPC campaigns?",
          answer: "Optimize PPC by researching keywords, writing compelling ad copy, creating targeted landing pages, setting appropriate bid strategies, using ad extensions, and continuously monitoring and adjusting based on performance data."
        },
        {
          id: "ppc-2",
          question: "What's a good conversion rate for PPC?",
          answer: "Average conversion rates vary by industry, but generally, 2-5% is considered good for e-commerce, while B2B might see 2-3%. Focus on improving your ROI rather than just conversion rates."
        },
        {
          id: "ppc-3",
          question: "How do I reduce PPC costs?",
          answer: "Reduce costs by improving quality scores, using negative keywords, optimizing ad schedules, targeting specific demographics, testing different ad formats, and focusing on high-performing keywords."
        }
      ]
    },
    {
      id: "email",
      title: "Email Marketing",
      icon: Mail,
      questions: [
        {
          id: "email-1",
          question: "How do I build an email list?",
          answer: "Build your email list by offering valuable lead magnets, using opt-in forms strategically, running contests, leveraging social media, and ensuring your signup process is simple and transparent."
        },
        {
          id: "email-2",
          question: "What's a good email open rate?",
          answer: "Average open rates vary by industry but typically range from 15-25%. Focus on improving subject lines, sender name recognition, timing, and list segmentation to increase open rates."
        },
        {
          id: "email-3",
          question: "How do I avoid spam filters?",
          answer: "Avoid spam filters by using authenticated domains, maintaining list hygiene, avoiding spam trigger words, balancing text and images, and following email marketing best practices and regulations."
        }
      ]
    }
  ]

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    )
  }

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId)
  }

  const filteredSections = faqSections.map(section => ({
    ...section,
    questions: section.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.questions.length > 0)

  return (
    <section id="fnq" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4F46E510_1px,transparent_1px),linear-gradient(to_bottom,#4F46E510_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 bottom-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
          <div className="aspect-[1400/678] w-[87.5rem] bg-gradient-to-tr from-purple-500/30 to-blue-500/30 opacity-20"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center rounded-full border border-purple-500/20 px-4 py-1.5 text-sm font-medium bg-purple-500/5 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Digital Marketing FAQ</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Common Questions About
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"> Digital Marketing</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Find answers to frequently asked questions about digital marketing strategies and best practices
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-600" />
            <Input
              placeholder="Search your question..."
              className="pl-10 border-purple-500/20 focus:border-purple-500/40"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-3xl mx-auto space-y-6">
          {filteredSections.map((section) => (
            <div
              key={section.id}
              className="rounded-xl border border-purple-500/10 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg overflow-hidden hover:border-purple-500/20 transition-all duration-300"
            >
              {/* Section Header */}
              <button
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-purple-500/5 transition-colors"
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 flex items-center justify-center">
                    <section.icon className="h-5 w-5 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-purple-600 transition-transform ${
                    openSection === section.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Questions */}
              {openSection === section.id && (
                <div className="px-6 pb-4">
                  <div className="space-y-3">
                    {section.questions.map((q) => (
                      <div
                        key={q.id}
                        className="rounded-lg border border-purple-500/10 overflow-hidden hover:border-purple-500/20 transition-all duration-300"
                      >
                        <button
                          className="w-full px-4 py-3 flex items-center justify-between hover:bg-purple-500/5 transition-colors"
                          onClick={() => toggleQuestion(q.id)}
                        >
                          <span className="font-medium text-left">{q.question}</span>
                          <ChevronDown
                            className={`h-4 w-4 text-purple-600 transition-transform ${
                              openQuestions.includes(q.id) ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openQuestions.includes(q.id) && (
                          <div className="px-4 py-3 bg-gradient-to-r from-purple-500/5 to-blue-500/5">
                            <p className="text-muted-foreground">{q.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Need Help */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-purple-500/5 to-blue-500/5 backdrop-blur-xl border border-purple-500/10">
            <div className="inline-flex items-center gap-2 mb-4">
              <HelpCircle className="h-5 w-5 text-purple-600" />
              <span className="font-medium">Need More Help?</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Our digital marketing experts are here to help you succeed
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                className="border-purple-500/20 hover:border-purple-500/40"
              >
                Contact an Expert
              </Button>
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fnq
