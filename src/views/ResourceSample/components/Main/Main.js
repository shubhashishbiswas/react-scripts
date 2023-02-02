import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
/*
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
*/
// import { bgcolor } from '@mui/system';

const Main = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={isMd ? 4 : 2}>
      <Grid item xs={12} md={12}>

        <Box marginBottom={1} sx={{ marginTop: 1 }}>
          <Typography variant={'h5'} fontWeight={700} gutterBottom color={theme.palette.primary.main}>
            What is Autism?
          </Typography>
        
          <Box display='flex'>
            <iframe  
              srcDoc= 
                '
                <div style="border:0px; margin: 0;font-family: Eczar,sans-serif; font-weight: 400; font-size: 1rem;">
                  
                Autism is a developmental disability that affects communication, social interaction, and play skills. About 1 in 45 people are diagnosed with Autism and boys are approximately four times more likely to have it than girls. It affects the way the brain works and should be diagnosed by a medical professional &ndash; preferably a developmental pediatrician.<br /><br />Although every child with autism is different, children with autism will usually have:<br />
                <ul>
                <li>Trouble learning language as well as problems with communication, both spoken and non-spoken, like eye contact, gestures, and pointing.</li>
                <li>Problems with social skills, such as sharing emotions, understanding how people are feeling, expressing empathy, or having a conversation.</li>
                <li>Unusual behaviors (e.g., hand flapping, rocking, biting), play that is repetitive and unusual and a strong preference for sticking to a routine.</li>
                <li>Trouble processing things they hear, see, smell, touch, or taste.</li>
                </ul>
                Autism is known as a spectrum disorder, meaning some people are affected mildly while others are affected severely. Autism is an evolving disorder and your child&rsquo;s symptoms, and needs may change as they pass through different stages of development.



                </div>
                '
              width={'2000px'}
              height={isSm ? '560px' : '1100px'}
              frameBorder={0}
            >
            </iframe>      
          </Box>
        </Box>
        
        {/********************************/}

        <br />
        
        <Box marginBottom={1} sx={{ marginTop: 1 }}>
          <Typography variant={'h5'} fontWeight={700} gutterBottom color={theme.palette.primary.main}>
          What are the symptoms of Autism?
          </Typography>
        
          <Box display='flex' >
            <iframe  
              srcDoc= 
                '
                <div style="border:0px; margin: 0;font-family: Eczar,sans-serif; font-weight: 400; font-size: 1rem; ; ">
                  
                <div>The core symptoms of autism are:<br /><br /><strong>Social communication challenges</strong></div>
                <div>Children and adults with autism have difficulty with verbal and non-verbal communication. For example, they may not understand or appropriately use:</div>
                <ul style="list-style-type: disc;">
                <li>Spoken language (around a third of people with autism are nonverbal)</li>
                <li>Gestures</li>
                <li>Eye contact</li>
                <li>Facial expressions</li>
                <li>Tone of voice</li>
                <li>Expressions not meant to be taken literally</li>
                </ul>
                <div><strong><br /></strong>Additional social challenges can include difficulty with:</div>
                <ul>
                <li>Recognizing emotions and intentions in others</li>
                <li>Recognizing one&rsquo;s own emotions</li>
                <li>Expressing emotions</li>
                <li>Seeking emotional comfort from others</li>
                <li>Feeling overwhelmed in social situations</li>
                <li>Taking turns in conversation</li>
                <li>Gauging personal space (appropriate distance between people)</li>
                </ul>
                <br /><strong>Restricted and repetitive behaviors<br /></strong>Restricted and repetitive behaviors vary greatly across the autism spectrum. They can include:<br />
                <ul>
                <li>Repetitive body movements (e.g. rocking, flapping, spinning, running back and forth)</li>
                <li>Repetitive motions with objects (e.g. spinning wheels, shaking sticks, flipping levers)</li>
                <li>Staring at lights or spinning objects</li>
                <li>Ritualistic behaviors (e.g. lining up objects, repeatedly touching objects in a set order)</li>
                <li>Narrow or extreme interests in specific topics</li>
                <li>Need for unvarying routine/resistance to change (e.g. same daily schedule, meal menu, clothes, route to school)</li>
                </ul>
                <p>Many people with autism have sensory issues. These typically involve over- or under-sensitivities to sounds, lights, touch, tastes, smells, pain, and other stimuli. Autism is also associated with high rates of certain physical and mental health conditions.</p>
                <p>&nbsp;</p>



                </div>
                '
              width={'2000px'}
              height={isSm ? '1100px' : '1800px'}
              frameBorder={0}
            >
            </iframe>      
          </Box>
        </Box>
        
        <br />
        
        {/********************************/}

        <Box marginBottom={1}>
          <Typography variant={'h5'} fontWeight={700} gutterBottom color={theme.palette.primary.main}>
          How is Autism Diagnosed?
          </Typography>
        
          <Box display='flex' >
            <iframe  
              srcDoc= 
                '
                <div style="border:0px; margin: 0;font-family: Eczar,sans-serif; font-weight: 400; font-size: 1rem; line-height: 1.5;  >
                
                
                  Specialized healthcare providers diagnose autism using a checklist of criteria in the two categories above. They also assess autism symptom severity. Autism&rsquo;s severity scale reflects how much support a person needs for daily function.<br /><br />
                  <ol>
                  <li>Persistent deficits in social communication and social interaction across multiple contexts, as manifested by the following, currently or by history (examples are illustrative, not exhaustive; see text):
                  <ol style="list-style-type: lower-alpha;">
                  <li>Deficits in social-emotional reciprocity, ranging, for example, from abnormal social approach and failure of normal back-and-forth conversation; to reduced sharing of interests, emotions, or affect; to failure to initiate or respond to social interactions.</li>
                  <li>Deficits in nonverbal communicative behaviors used for social interaction, ranging, for example, from poorly integrated verbal and nonverbal communication; to abnormalities in eye contact and body language or deficits in understanding and use of gestures: to a total lack of facial expressions and nonverbal communication.</li>
                  <li>Deficits in developing, maintaining, and understanding relationships, ranging, for example, from difficulties adjusting behavior to suit various social contexts; to difficulties in sharing imaginative play or in making friends; to absence of interest in peers.</li>
                  </ol>
                  </li>
                  <li>Restricted, repetitive patterns of behavior, interests, or activities, as manifested by at least two of the following, currently or by history (examples are illustrative, not exhaustive; see text):
                  <ol style="list-style-type: lower-alpha;">
                  <li>Stereotyped or repetitive motor movements, use of objects, or speech (e.g., simple motor stereotypes, lining up toys or flipping objects, echolalia, idiosyncratic phrases).</li>
                  <li>Insistence on sameness, inflexible adherence to routines, or ritualized patterns of verbal or nonverbal behavior (e.g., extreme distress at small changes, difficulties with transitions, rigid thinking patterns, greeting rituals, need to take same route or eat same food every day).</li>
                  <li>Highly restricted, fixated interests that are abnormal in intensity or focus (e.g., strong attachment to or preoccupation with unusual objects, excessively circumscribed or perseverative interests).</li>
                  <li>Hyper- or hypo-reactivity to sensory input or unusual interest in sensory aspects of the environment (e.g., apparent indifference to pain/temperature, adverse response to specific sounds or textures, excessive smelling or touching of objects, visual fascination with lights or movement).</li>
                  </ol>
                  </li>
                  <li>Symptoms must be present in the early developmental period (but may not become fully manifest until social demands exceed limited capacities or may be masked by learned strategies in later life).</li>
                  <li>Symptoms cause clinically significant impairment in social, occupational, or other important areas of current functioning.</li>
                  <li>These disturbances are not better explained by intellectual disability (intellectual developmental disorder) or global developmental delay. Intellectual disability and autism spectrum disorder frequently co-occur; to make comorbid diagnoses of autism spectrum disorder and intellectual disability, social communication should be below that expected for general developmental level.</li>
                  </ol>
                  Since receptive language may lag expressive language development in autism spectrum disorder, receptive and expressive language skills should be considered separately.

                </div>
                '
              width={'2000px'}
              height={isSm ? '900px' : '1800px'}
              frameBorder={0}
            >
            </iframe>      
          </Box>
        </Box>

        <br />

        {/********************************/}

        <Box marginBottom={1}>
          <Typography variant={'h5'} fontWeight={700} gutterBottom color={theme.palette.primary.main}>
          What are the severity levels of autism?
          </Typography>
        
          <Box display='flex' >
            <iframe  
              srcDoc= 
                '
                <div style="border:0px; margin: 0;font-family: Eczar,sans-serif; font-weight: 400; font-size: 1rem; line-height: 1.5; ">
                
                
                <br />
                <table style="height: 72px; width: 100%; border-collapse: collapse; border-style: solid; margin-left: auto; margin-right: auto;" border="1" cellspacing="10" cellpadding="10">
                <tbody>
                <tr style="height: 18px;">
                <td style="width: 18.9834%; height: 18px; text-align: left;" scope="rowgroup"><strong>Level</strong></td>
                <td style="width: 51.556%; height: 18px;"><strong>Social Communication</strong></td>
                <td style="width: 29.3568%; height: 18px;"><strong>Restricted, repetitive behaviors</strong></td>
                </tr>
                <tr style="height: 18px;">
                <td style="width: 18.9834%; height: 18px;"><strong>Level 3</strong> &ndash; requires very&nbsp;substantial support</td>
                <td style="width: 51.556%; height: 18px;">Severe deficits in verbal and non-verbal social communication skills cause severe&nbsp;impairments in functioning, very limited initiation of social interactions, and minimal response to social overtures from others. For example, a person with few words of intelligible speech who rarely initiates interaction and, when he or she does, makes unusual approaches to meet needs only and responds to only very direct&nbsp;social approaches.</td>
                <td style="width: 29.3568%; height: 18px;">Inflexibility of behavior, extreme difficulty coping with change, or&nbsp;other restricted/repetitive behaviors markedly interfere with functioning in all spheres. Great distress/difficulty changing focus or action.</td>
                </tr>
                <tr style="height: 18px;">
                <td style="width: 18.9834%; height: 18px;"><strong>Level 2</strong> &ndash; requires substantial support</td>
                <td style="width: 51.556%; height: 18px;">Marked deficits in verbal and nonverbal social communication skills; social impairments apparent even with support in place; limited initiation of social interactions; and reduced or abnormal responses to social overtures from others. For example, a person who speaks simple sentences, whose interaction is limited to narrow special interests, and who has markedly odd non-verbal communication.</td>
                <td style="width: 29.3568%; height: 18px;">Inflexibility of behavior, difficulty coping with change, or other restricted/repetitive behaviors appear frequently enough to be obvious to the casual observer and interfere with functioning in a variety of contexts. Distress and/or difficulty changing focus or action.</td>
                </tr>
                <tr style="height: 18px;">
                <td style="width: 18.9834%; height: 18px;"><strong>Level 1</strong> &ndash; requires support</td>
                <td style="width: 51.556%; height: 18px;">Without support in place, deficits in social communication cause noticeable impairments. Difficulty initiating social interactions, and clear examples of atypical or unsuccessful responses to social overtures of others. May appear to have decreased interest in social interactions. For example, a person who is able to speak in full sentences and engages in communication but whose to- and fro conversation with others fails, and whose attempts to make friends are odd and typically unsuccessful.</td>
                <td style="width: 29.3568%; height: 18px; text-align: left;" scope="row">Inflexibility of behavior causes significant interference with functioning in or or more contexts. Difficulty switching between activities. Problems of organization and planning hamper independence</td>
                </tr>
                </tbody>
                </table>
                

                </div>
                '
              width={'2000px'}
              height={isSm ? '900px' : '2250px'}
              frameBorder={0}
            >
            </iframe>      
          </Box>
        </Box>
        
        <br />
        

        <Box marginBottom={1}>
          <Typography variant={'h5'} fontWeight={700} gutterBottom color={theme.palette.primary.main}>
          What is the course of autism spectrum disorder?
          </Typography>
        
          <Box display='flex' >
            <iframe  
              srcDoc= 
                '
                <div style="border:0px; margin: 0;font-family: Eczar,sans-serif; font-weight: 400; font-size: 1rem; line-height: 1.5;  ">
                
                
                Autism spectrum disorder is not a degenerative disorder, and it is typical for learning and compensation to continue throughout life. Symptoms are often most marked in early childhood and early school years, with developmental gains typical in later childhood in at least some areas (e.g., increased interest in social interaction). <br /><br />A small proportion of individuals deteriorate behaviorally during adolescence, whereas most others improve. Only a minority of individuals with autism spectrum disorder live and work independently in adulthood; those who do tend to have superior language and intellectual abilities and are able to find a niche that matches their special interests and skills. <br /><br />In general, individuals with lower levels of impairment may be better able to function independently. However, even these individuals may remain socially naive and vulnerable, have difficulties organizing practical demands without aid, and are prone to anxiety and depression.<br /><br />Many adults report using compensation strategies and coping mechanisms to mask their difficulties in public but suffer from the stress and effort of maintaining a socially acceptable facade. Scarcely anything is known about old age in autism spectrum disorder.

                </div>
                '
              width={'2000px'}
              height={isSm ? '470px' : '1000px'}
              frameBorder={0}
            >
            </iframe>      
          </Box>
        </Box>

        <br />


        <Box marginBottom={1}>
          <Typography variant={'h5'} fontWeight={700} gutterBottom color={theme.palette.primary.main}>
          How can I help a child with Autism?
          </Typography>
          <Box display='flex' >
            <iframe  
              srcDoc= 
                '
                <div style="border:0px; margin: 0;font-family: Eczar,sans-serif; font-weight: 400; font-size: 1rem; line-height: 1.5;  ">
                
                
                Early intervention is very effective in Autism and improves a child&rsquo;s ability to cope well with this life-long condition. <br /><br />The best strategies encourage therapists and parents to work with the child&rsquo;s own interests or actions to slowly build engagement, interaction, and communication. Play often works better than more directive methods to help children learn. Recent research has shown these approaches to be very effective for children with autism. <br /><br />The Applied Behavioral Analysis (ABA) approach focuses on the child&rsquo;s interests and motivation to learn new, more adaptive behaviors. They are based on the principles of reward and reinforcement for appropriate behaviors.<br /><br />Occupational therapy helps children develop appropriate social, play, and learning skills. The therapist aids the child in achieving normal daily tasks (e.g., getting dressed and playing with other children). Occupational therapists may use aspects of sensory integration therapy to help the child appropriately respond to and organize information coming through the senses.<br /><br />Speech and language therapy is often beneficial for children with autism since about 30-50% of them do not use speech. Conventional methods of speech therapy are not always effective. The therapist should have a good understanding of autism and be able to emphasize non-verbal communication, like pictures and gestures if necessary. For children who speak, a speech &amp;<br />language therapist helps them by enabling them to use their language for social interaction and play. Play is often challenging for children who are verbal.<br /><br />When choosing an intervention plan, educate yourself on the options which have been scientifically tested and shown to be effective for managing autism symptoms. Be aware that the internet is full of therapies that lack evidence supporting their use with autism. The best intervention plans are those which incorporate aspects of all the aforementioned therapies as per the child&rsquo;s needs and abilities.<br /><br />The earlier the intervention is implemented, the better the outcome for your child. Research also shows that children whose families are strongly engaged and involved make better progress. Consistency and structure are very important. If you can work closely with your child&rsquo;s therapist and teachers so that everyone is responding the same way, your child will benefit a lot.

                </div>
                '
              width={'2000px'}
              height={isSm ? '800px' : '1700px'}
              frameBorder={0}
            >
            </iframe>      
          </Box>
        </Box>
        
        <br />

        <Box marginBottom={1}>
          <Typography variant={'h5'} fontWeight={700} gutterBottom color={theme.palette.primary.main}>
          Can a child with Autism do well at school?
          </Typography>
          <Box display='flex' >
            <iframe  
              srcDoc= 
                '
                <div style="border:0px; margin: 0;font-family: Eczar,sans-serif; font-weight: 400; font-size: 1rem; line-height: 1.5;  ">
                
                
                Children with autism are just like other kids in many ways. Some are very bright; some may be intellectually impaired. Their skills may be strong in some areas (memory, math, music) and weak in others (speech, self-care). Regardless of their abilities, it is important for children with autism to attend school because it provides a structured environment with clearly laid out expectations as well as opportunities for interacting with children of their age. Attending school is great therapy! <br /><br />Talk to your pediatrician or therapist to help you decide the best type of school for your child. Options include a regular school, an inclusive school (in which most children are typical, but some students have special needs), and special schools (meant specifically for children with disabilities).

                </div>
                '
              width={'2000px'}
              height={isSm ? '300px' : '650px'}
              frameBorder={0}
            >
            </iframe>      
          </Box>
        </Box>

        <br />


        <Box marginBottom={1}>
          <Typography variant={'h5'} fontWeight={700} gutterBottom color={theme.palette.primary.main}>
          What sensory challenges does a child with autism face?
          </Typography>
          <Box display='flex' >
            <iframe  
              srcDoc= 
                '
                <div style="border:0px; margin: 0;font-family: Eczar,sans-serif; font-weight: 400; font-size: 1rem; line-height: 1.5; ">
                
                
                Sensory issues are common in people with autism and are even included in the diagnostic criteria for autism spectrum disorder. Each autistic person is unique, and this includes their personal sensory sensitivities.<br /><br />People with autism might have sensitivities to:<br />
                <ul>
                <li>Sights</li>
                <li>Sounds</li>
                <li>Smells</li>
                <li>Tastes</li>
                <li>Touch</li>
                <li>Balance (vestibular)</li>
                <li>Awareness of body position and movement (proprioception)</li>
                <li>Awareness of internal body cues and sensations (interoception)</li>
                </ul>
                Autistic people can experience both hypersensitivity (over-responsiveness) and hyposensitivity (under-responsiveness) to a wide range of stimuli. Most people have a combination of both.<br /><br />Many autistic people experience hypersensitivity to bright lights or certain light wavelengths (e.g., LED or fluorescent lights). Certain sounds, smells, textures and tastes can also be overwhelming. This can result in sensory avoidance &ndash; trying to get away from stimuli that most people can easily tune out. Sensory avoidance can look like pulling away from physical touch, covering the ears to avoid loud or unpredictable sounds, or avoiding certain kinds of clothing. <br /><br />Hyposensitivity is also common. This can look like a constant need for movement; difficulty recognizing sensations like hunger, illness or pain; or attraction to loud noises, bright lights and vibrant colors. People who are hyposensitive may engage in sensory seeking to get more sensory input from the environment. For example, people with autism may stimulate their senses by making loud noises, touching people or objects, or rocking back and forth.

                </div>
                '
              width={'2000px'}
              height={isSm ? '700px' : '1150px'}
              frameBorder={0}
            >
            </iframe>      
          </Box>
        </Box>

        <br />

        <Box marginBottom={1}>
          <Typography variant={'h5'} fontWeight={700} gutterBottom color={theme.palette.primary.main}>
          What do these sensory issues feel like?
          </Typography>
          <Box display='flex' >
            <iframe  
              srcDoc= 
                '
                <div style="border:0px; margin: 0;font-family: Eczar,sans-serif; font-weight: 400; font-size: 1rem; line-height: 1.5; ; ">
                
                
                Sensory issues are common in people with autism and are even included in the diagnostic criteria for autism spectrum disorder. Each autistic person is unique, and this includes their personal sensory sensitivities.<br /><br />People with autism might have sensitivities to:<br />
                <ul>
                <li>Sights</li>
                <li>Sounds</li>
                <li>Smells</li>
                <li>Tastes</li>
                <li>Touch</li>
                <li>Balance (vestibular)</li>
                <li>Awareness of body position and movement (proprioception)</li>
                <li>Awareness of internal body cues and sensations (interoception)</li>
                </ul>
                Autistic people can experience both hypersensitivity (over-responsiveness) and hyposensitivity (under-responsiveness) to a wide range of stimuli. Most people have a combination of both.<br /><br />Many autistic people experience hypersensitivity to bright lights or certain light wavelengths (e.g., LED or fluorescent lights). Certain sounds, smells, textures and tastes can also be overwhelming. This can result in sensory avoidance &ndash; trying to get away from stimuli that most people can easily tune out. Sensory avoidance can look like pulling away from physical touch, covering the ears to avoid loud or unpredictable sounds, or avoiding certain kinds of clothing. <br /><br />Hyposensitivity is also common. This can look like a constant need for movement; difficulty recognizing sensations like hunger, illness or pain; or attraction to loud noises, bright lights and vibrant colors. People who are hyposensitive may engage in sensory seeking to get more sensory input from the environment. For example, people with autism may stimulate their senses by making loud noises, touching people or objects, or rocking back and forth.

                </div>
                '
              width={'2000px'}
              height={isSm ? '700px' : '1350px'}
              frameBorder={0}
            >
            </iframe>      
          </Box>
        </Box>

        <br />


        <Box marginBottom={1}>
          <Typography variant={'h5'} fontWeight={700} gutterBottom color={theme.palette.primary.main}>
          What accommodations are needed for these sensory issues?
          </Typography>
          <Box display='flex' >
            <iframe  
              srcDoc= 
                '
                <div style="border:0px; margin: 0;font-family: Eczar,sans-serif; font-weight: 400; font-size: 1rem; line-height: 1.5; ; ">
                
                
                Many people with autism show certain behaviors when they are experiencing a sensory issue:<br />
                <ul>
                <li>Increased movement, such as jumping, spinning or crashing into things</li>
                <li>Increased stimming, such as hand flapping, making repetitive noises or rocking back and forth</li>
                <li>Talking faster and louder, or not talking at all</li>
                <li>Covering ears or eyes</li>
                <li>Difficulty recognizing internal sensations like hunger, pain or the need to use the bathroom</li>
                <li>Refusing or insisting on certain foods or clothing items</li>
                <li>Frequent chewing on non-food items</li>
                <li>Frequent touching of others or playing rough</li>
                <li>Difficulty communicating or responding as the brain shifts resources to deal with sensory input (shutdown)</li>
                <li>Escalating, overwhelming emotions or need to escape a situation (meltdown)</li>
                </ul>

                <strong>Examples of accommodations for hyposensitivity:</strong> <br />
                <ul>
                <li>Visual supports for those who have difficulty processing spoken information</li>
                <li>Using fidget toys, chewies and other sensory tools</li>
                <li>Arranging furniture to provide safe, open spaces</li>
                <li>Taking frequent movement breaks throughout the day</li>
                <li>Eating foods with strong flavors or mixed textures</li>
                <li>Weighted blankets, lap pads or clothing that provides deep pressure</li>
                </ul>
                <br /> Autistic people have the right to ask for reasonable accommodations at work and school. If you are the parent or support person of a child with autism, you can talk about sensory accommodations at school with their IEP team or consider a 504 plan.

                </div>
                '
              width={'2000px'}
              height={isSm ? '700px' : '1350px'}
              frameBorder={0}
            >
            </iframe>      
          </Box>
        </Box>

        <br />


        <Box marginBottom={1}>
          <Typography variant={'h5'} fontWeight={700} gutterBottom color={theme.palette.primary.main}>
          If I'm autistic, how should I drive self-advocacy for my sensory issues?
          </Typography>
          <Box display='flex' padding={'0px'}>
            <iframe  
              srcDoc= 
                '
                <div style="border:0px; margin: 0;font-family: Eczar,sans-serif; font-weight: 400; font-size: 1rem; line-height: 1.5; ; ">
                
                
                If you are an autistic person, you may need to self-advocate for your sensory needs to be met. This starts with learning about your needs so you understand what works and what doesn&rsquo;t work for you. Then, you can make changes to your environment, try new tools or strategies, or change your routines to better meet your needs. <br /><br />Our <strong><em>Self-Empowerment Roadmap</em></strong> can help you learn more about your needs so you can overcome your challenges. Keep in mind that it can take time and lots of trial and error to fully understand your needs and figure out what accommodations work best for you. <br /><br />Once you understand the accommodations you need, you can work with your employer and support team to get those needs met. Our <em><strong>Employment Toolkit</strong></em> will give you the tools you need to navigate these conversations and cope with sensory issues in the workplace.<br /><br />Reach out to us for our resources mentioned above.


                </div>
                '
              width={'2000px'}
              frameBorder={0}
              height={isSm ? '400px' : '680px'}
              
              
              
            >
            </iframe>      
          </Box>
        </Box>

      </Grid>
    </Grid>
  );
};
export default Main;
