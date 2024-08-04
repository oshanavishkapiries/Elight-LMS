import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbProps {
  subName?: string;
  title?: string;
}

const BreadcrumbHead = ({ subName = "", title = "" }: BreadcrumbProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">LMS</BreadcrumbLink>
        </BreadcrumbItem>
        {title ? (
          <>
          <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{title}</BreadcrumbLink>
            </BreadcrumbItem>
          </>
        ) : null}
        {subName ? (
          <>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{subName}</BreadcrumbLink>
          </BreadcrumbItem>
          </>
        ) : null}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbHead;
